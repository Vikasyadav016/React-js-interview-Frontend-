import React, { useEffect, useRef, useState } from "react";

const VehicleSpeedTrackingWithReport = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const animationRef = useRef(null);

  const [tracking, setTracking] = useState(false);
  const [cameraStarted, setCameraStarted] = useState(false);

  const [roadDistance, setRoadDistance] = useState(20);
  const [speedLimit, setSpeedLimit] = useState(80);

  const [vehicles, setVehicles] = useState([]);
  const [report, setReport] = useState([]);

  const [stats, setStats] = useState({
    totalVehicles: 0,
    averageSpeed: 0,
    maximumSpeed: 0,
    violations: 0,
  });

  // -------------------------------------------------------
  // START CAMERA
  // -------------------------------------------------------
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setCameraStarted(true);
    } catch (error) {
      console.error("Camera error:", error);
      alert(
        "Unable to access camera. Please allow camera permission and use HTTPS or localhost."
      );
    }
  };

  // -------------------------------------------------------
  // STOP CAMERA
  // -------------------------------------------------------
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraStarted(false);
    setTracking(false);
  };

  // -------------------------------------------------------
  // START SPEED TRACKING
  // -------------------------------------------------------
  const startTracking = () => {
    if (!cameraStarted) {
      alert("Please start the camera first.");
      return;
    }

    setTracking(true);
  };

  // -------------------------------------------------------
  // STOP SPEED TRACKING
  // -------------------------------------------------------
  const stopTracking = () => {
    setTracking(false);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // -------------------------------------------------------
  // CLEAR REPORT
  // -------------------------------------------------------
  const clearReport = () => {
    setReport([]);

    setStats({
      totalVehicles: 0,
      averageSpeed: 0,
      maximumSpeed: 0,
      violations: 0,
    });

    setVehicles([]);
  };

  // -------------------------------------------------------
  // DEMO VEHICLE DETECTION
  //
  // Replace this function with:
  // TensorFlow.js / YOLO / MediaPipe / backend detector.
  // -------------------------------------------------------
  const detectVehicles = async () => {
    /*
      Expected output:

      [
        {
          id: 1,
          type: "Car",
          x: 300,
          y: 250,
          width: 120,
          height: 70,
          confidence: 0.92
        }
      ]

      x/y/width/height are pixel coordinates
      relative to the video.
    */

    return [];
  };

  // -------------------------------------------------------
  // DRAW CAMERA OVERLAY
  // -------------------------------------------------------
  const drawOverlay = (detectedVehicles = []) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);

    // ---------------------------------------------
    // First measurement line
    // ---------------------------------------------
    const line1Y = height * 0.42;

    ctx.beginPath();
    ctx.moveTo(0, line1Y);
    ctx.lineTo(width, line1Y);

    ctx.strokeStyle = "#00ff88";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#00ff88";
    ctx.font = "bold 20px Arial";
    ctx.fillText("MEASUREMENT LINE A", 20, line1Y - 12);

    // ---------------------------------------------
    // Second measurement line
    // ---------------------------------------------
    const line2Y = height * 0.65;

    ctx.beginPath();
    ctx.moveTo(0, line2Y);
    ctx.lineTo(width, line2Y);

    ctx.strokeStyle = "#ffcc00";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#ffcc00";
    ctx.fillText("MEASUREMENT LINE B", 20, line2Y - 12);

    // ---------------------------------------------
    // Distance
    // ---------------------------------------------
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 18px Arial";
    ctx.fillText(
      `Known distance: ${roadDistance} meters`,
      20,
      height - 25
    );

    // ---------------------------------------------
    // Draw detected vehicles
    // ---------------------------------------------
    detectedVehicles.forEach((vehicle) => {
      const isSpeeding = vehicle.speed > speedLimit;

      ctx.strokeStyle = isSpeeding ? "#ff3333" : "#00ff88";
      ctx.lineWidth = 4;

      ctx.strokeRect(
        vehicle.x,
        vehicle.y,
        vehicle.width,
        vehicle.height
      );

      ctx.fillStyle = isSpeeding ? "#ff3333" : "#00ff88";

      ctx.fillRect(
        vehicle.x,
        vehicle.y - 32,
        150,
        30
      );

      ctx.fillStyle = "#000";
      ctx.font = "bold 16px Arial";

      ctx.fillText(
        `${vehicle.type || "Vehicle"} ${Math.round(vehicle.speed || 0)} km/h`,
        vehicle.x + 5,
        vehicle.y - 10
      );
    });
  };

  // -------------------------------------------------------
  // SPEED CALCULATION
  // -------------------------------------------------------
  const calculateSpeed = (distanceMeters, timeSeconds) => {
    if (!timeSeconds || timeSeconds <= 0) return 0;

    // m/s -> km/h
    return (distanceMeters / timeSeconds) * 3.6;
  };

  // -------------------------------------------------------
  // ADD VEHICLE TO REPORT
  // -------------------------------------------------------
  const addVehicleToReport = (vehicle) => {
    const speed = Math.round(vehicle.speed || 0);
    const isViolation = speed > speedLimit;

    const record = {
      id: report.length + 1,
      vehicleType: vehicle.type || "Car",
      speed,
      speedLimit,
      status: isViolation ? "Speed Violation" : "Normal",
      timestamp: new Date().toLocaleString(),
    };

    setReport((previous) => [...previous, record]);

    setStats((previous) => {
      const total = previous.totalVehicles + 1;

      const newAverage =
        (previous.averageSpeed * previous.totalVehicles + speed) /
        total;

      return {
        totalVehicles: total,
        averageSpeed: Math.round(newAverage),
        maximumSpeed: Math.max(previous.maximumSpeed, speed),
        violations:
          previous.violations + (isViolation ? 1 : 0),
      };
    });
  };

  // -------------------------------------------------------
  // TRACKING LOOP
  // -------------------------------------------------------
  useEffect(() => {
    if (!tracking) return;

    let mounted = true;

    const processFrame = async () => {
      if (!mounted) return;

      try {
        const detectedVehicles = await detectVehicles();

        /*
          In a real implementation, each tracked vehicle
          needs:

          previousPosition
          currentPosition
          firstLineTimestamp
          secondLineTimestamp

          Example:

          time = lineBTime - lineATime

          speed = distance / time

          speedKmH = speed * 3.6
        */

        const processedVehicles = detectedVehicles.map((vehicle) => ({
          ...vehicle,
          speed: vehicle.speed || 0,
        }));

        setVehicles(processedVehicles);

        drawOverlay(processedVehicles);
      } catch (error) {
        console.error("Detection error:", error);
      }

      animationRef.current = requestAnimationFrame(processFrame);
    };

    processFrame();

    return () => {
      mounted = false;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [tracking, roadDistance, speedLimit]);

  // -------------------------------------------------------
  // CLEANUP
  // -------------------------------------------------------
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current
          .getTracks()
          .forEach((track) => track.stop());
      }

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // -------------------------------------------------------
  // EXPORT CSV
  // -------------------------------------------------------
  const exportCSV = () => {
    if (!report.length) {
      alert("No report data available.");
      return;
    }

    const headers = [
      "Vehicle ID",
      "Vehicle Type",
      "Speed (km/h)",
      "Speed Limit",
      "Status",
      "Timestamp",
    ];

    const rows = report.map((item) => [
      item.id,
      item.vehicleType,
      item.speed,
      item.speedLimit,
      item.status,
      item.timestamp,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((value) => `"${value}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `vehicle-speed-report-${Date.now()}.csv`;

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Vehicle Speed Tracking</h1>
          <p style={styles.subtitle}>
            Real-time roadside vehicle speed monitoring
          </p>
        </div>

        <div
          style={{
            ...styles.status,
            background: tracking ? "#0f5132" : "#343a40",
          }}
        >
          <span
            style={{
              ...styles.statusDot,
              background: tracking ? "#20ff83" : "#999",
            }}
          />

          {tracking ? "TRACKING LIVE" : "TRACKING STOPPED"}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* CONTROLS */}
      {/* ------------------------------------------------ */}

      <div style={styles.controlPanel}>
        <button
          style={styles.primaryButton}
          onClick={startCamera}
          disabled={cameraStarted}
        >
          📷 Start Camera
        </button>

        <button
          style={styles.successButton}
          onClick={startTracking}
          disabled={!cameraStarted || tracking}
        >
          ▶ Start Speed Tracking
        </button>

        <button
          style={styles.dangerButton}
          onClick={stopTracking}
          disabled={!tracking}
        >
          ■ Stop Tracking
        </button>

        <button
          style={styles.secondaryButton}
          onClick={stopCamera}
        >
          ✕ Stop Camera
        </button>

        <button
          style={styles.secondaryButton}
          onClick={clearReport}
        >
          Clear Report
        </button>

        <button
          style={styles.exportButton}
          onClick={exportCSV}
        >
          ↓ Export CSV
        </button>
      </div>

      {/* ------------------------------------------------ */}
      {/* SETTINGS */}
      {/* ------------------------------------------------ */}

      <div style={styles.settings}>
        <div>
          <label style={styles.label}>
            Known Road Distance
          </label>

          <div style={styles.inputGroup}>
            <input
              type="number"
              value={roadDistance}
              min="1"
              onChange={(e) =>
                setRoadDistance(Number(e.target.value))
              }
              style={styles.input}
            />

            <span>meters</span>
          </div>
        </div>

        <div>
          <label style={styles.label}>
            Speed Limit
          </label>

          <div style={styles.inputGroup}>
            <input
              type="number"
              value={speedLimit}
              min="1"
              onChange={(e) =>
                setSpeedLimit(Number(e.target.value))
              }
              style={styles.input}
            />

            <span>km/h</span>
          </div>
        </div>

        <div style={styles.infoBox}>
          <strong>How it works</strong>

          <span>
            Vehicle crossing Line A → timer starts →
            vehicle crosses Line B → speed calculated.
          </span>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* MAIN CONTENT */}
      {/* ------------------------------------------------ */}

      <div style={styles.grid}>
        {/* CAMERA */}
        <div style={styles.cameraCard}>
          <div style={styles.cardHeader}>
            <h2>Live Camera</h2>

            <span style={styles.cameraStatus}>
              {cameraStarted ? "● Camera Online" : "○ Camera Offline"}
            </span>
          </div>

          <div style={styles.videoContainer}>
            <video
              ref={videoRef}
              muted
              playsInline
              style={styles.video}
            />

            <canvas
              ref={canvasRef}
              style={styles.canvas}
            />

            {!cameraStarted && (
              <div style={styles.cameraPlaceholder}>
                <div style={{ fontSize: 50 }}>📹</div>

                <div>
                  Start the camera to begin vehicle monitoring.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* LIVE VEHICLES */}
        <div style={styles.liveCard}>
          <div style={styles.cardHeader}>
            <h2>Live Vehicles</h2>

            <span style={styles.vehicleCount}>
              {vehicles.length}
            </span>
          </div>

          {vehicles.length === 0 ? (
            <div style={styles.empty}>
              No vehicles detected
            </div>
          ) : (
            <div>
              {vehicles.map((vehicle, index) => {
                const speeding =
                  vehicle.speed > speedLimit;

                return (
                  <div
                    key={vehicle.id || index}
                    style={{
                      ...styles.vehicleRow,
                      borderLeft: `4px solid ${
                        speeding ? "#ff3b30" : "#16c784"
                      }`,
                    }}
                  >
                    <div>
                      <strong>
                        {vehicle.type || "Vehicle"}
                      </strong>

                      <small>
                        ID: {vehicle.id || index + 1}
                      </small>
                    </div>

                    <div
                      style={{
                        ...styles.speed,
                        color: speeding
                          ? "#ff3b30"
                          : "#16c784",
                      }}
                    >
                      {Math.round(vehicle.speed || 0)}
                      <small> km/h</small>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* STATISTICS */}
      {/* ------------------------------------------------ */}

      <div style={styles.statistics}>
        <StatCard
          title="Vehicles Detected"
          value={stats.totalVehicles}
          icon="🚗"
        />

        <StatCard
          title="Average Speed"
          value={`${stats.averageSpeed} km/h`}
          icon="📊"
        />

        <StatCard
          title="Maximum Speed"
          value={`${stats.maximumSpeed} km/h`}
          icon="⚡"
        />

        <StatCard
          title="Speed Violations"
          value={stats.violations}
          icon="🚨"
          danger
        />
      </div>

      {/* ------------------------------------------------ */}
      {/* REPORT */}
      {/* ------------------------------------------------ */}

      <div style={styles.reportCard}>
        <div style={styles.reportHeader}>
          <div>
            <h2>Vehicle Speed Report</h2>

            <p>
              Standard vehicle monitoring report
            </p>
          </div>

          <button
            style={styles.exportButton}
            onClick={exportCSV}
          >
            ↓ Download Report
          </button>
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Vehicle</th>
                <th>Speed</th>
                <th>Limit</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>

            <tbody>
              {report.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    style={styles.emptyTable}
                  >
                    No vehicles have completed speed tracking yet.
                  </td>
                </tr>
              ) : (
                report.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.vehicleType}</td>

                    <td>
                      <strong>{item.speed} km/h</strong>
                    </td>

                    <td>{item.speedLimit} km/h</td>

                    <td>
                      <span
                        style={{
                          ...styles.badge,
                          background:
                            item.status === "Speed Violation"
                              ? "#ffe5e5"
                              : "#e3fcef",
                          color:
                            item.status === "Speed Violation"
                              ? "#d93025"
                              : "#087443",
                        }}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>{item.timestamp}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// STAT CARD
// -------------------------------------------------------

const StatCard = ({
  title,
  value,
  icon,
  danger = false,
}) => {
  return (
    <div
      style={{
        ...styles.statCard,
        borderTop: danger
          ? "4px solid #ff3b30"
          : "4px solid #1677ff",
      }}
    >
      <div style={styles.statIcon}>{icon}</div>

      <div>
        <div style={styles.statTitle}>{title}</div>

        <div
          style={{
            ...styles.statValue,
            color: danger ? "#ff3b30" : "#111827",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// STYLES
// -------------------------------------------------------

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f7fb",
    padding: "30px",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#172033",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 750,
  },

  subtitle: {
    marginTop: 7,
    color: "#6b7280",
  },

  status: {
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 30,
    fontWeight: 700,
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: "50%",
  },

  controlPanel: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    background: "#fff",
    padding: 18,
    borderRadius: 14,
    boxShadow: "0 2px 12px rgba(0,0,0,.05)",
    marginBottom: 18,
  },

  primaryButton: {
    background: "#1677ff",
    color: "#fff",
    border: 0,
    padding: "11px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 650,
  },

  successButton: {
    background: "#16a36a",
    color: "#fff",
    border: 0,
    padding: "11px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 650,
  },

  dangerButton: {
    background: "#dc3545",
    color: "#fff",
    border: 0,
    padding: "11px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 650,
  },

  secondaryButton: {
    background: "#eef2f7",
    color: "#334155",
    border: 0,
    padding: "11px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 650,
  },

  exportButton: {
    background: "#111827",
    color: "#fff",
    border: 0,
    padding: "11px 16px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 650,
  },

  settings: {
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
    alignItems: "end",
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
  },

  label: {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 7,
    color: "#475569",
  },

  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  input: {
    width: 100,
    border: "1px solid #d7dce5",
    borderRadius: 7,
    padding: "9px 10px",
    fontSize: 15,
  },

  infoBox: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    color: "#475569",
    fontSize: 13,
    maxWidth: 500,
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 2fr) minmax(300px, 1fr)",
    gap: 20,
    marginBottom: 20,
  },

  cameraCard: {
    background: "#111827",
    borderRadius: 15,
    overflow: "hidden",
    minHeight: 500,
  },

  liveCard: {
    background: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,.05)",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 18px",
  },

  cameraCardHeader: {
    color: "#fff",
  },

  cameraStatus: {
    fontSize: 13,
    color: "#22c55e",
  },

  videoContainer: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    background: "#020617",
    overflow: "hidden",
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  cameraPlaceholder: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    color: "#94a3b8",
    textAlign: "center",
  },

  vehicleCount: {
    background: "#e8f1ff",
    color: "#1677ff",
    padding: "5px 10px",
    borderRadius: 20,
    fontWeight: 700,
  },

  empty: {
    padding: 50,
    textAlign: "center",
    color: "#94a3b8",
  },

  vehicleRow: {
    margin: "0 15px 10px",
    padding: 12,
    background: "#f8fafc",
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  vehicleRowSmall: {
    display: "block",
  },

  speed: {
    fontSize: 22,
    fontWeight: 800,
  },

  statistics: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",
    gap: 15,
    marginBottom: 20,
  },

  statCard: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    display: "flex",
    gap: 15,
    alignItems: "center",
    boxShadow: "0 2px 12px rgba(0,0,0,.04)",
  },

  statIcon: {
    fontSize: 28,
  },

  statTitle: {
    color: "#64748b",
    fontSize: 13,
    marginBottom: 5,
  },

  statValue: {
    fontSize: 24,
    fontWeight: 800,
  },

  reportCard: {
    background: "#fff",
    borderRadius: 15,
    padding: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,.04)",
  },

  reportHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  tableContainer: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
  },

  badge: {
    display: "inline-block",
    padding: "5px 9px",
    borderRadius: 20,
    fontWeight: 700,
    fontSize: 12,
  },

  emptyTable: {
    textAlign: "center",
    padding: 40,
    color: "#94a3b8",
  },
};

export default VehicleSpeedTrackingWithReport;