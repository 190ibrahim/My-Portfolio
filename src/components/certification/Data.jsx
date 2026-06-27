// Project schema:
// Fields stored as { en, de } objects are localized via the tr() helper.
// project, title, description, features[], role are bilingual.

export const CATEGORIES = {
  ALL: "all",
  ROBOTICS: "robotics",
  AI_ML: "ai/ml",
  SOFTWARE: "software",
};

// Note: filter labels are localized via i18n in Works.jsx (work.filters.*)

export const projectsData = [
  // ==================== MASTER'S THESIS (QR / poster target — opened via #msc-thesis) ====================
  // The poster's QR code links to .../My-Portfolio/#msc-thesis, which opens this
  // project's modal directly (deep-linking handled in Works.jsx).
  {
    id: 23,
    slug: "msc-thesis",
    featured: true,
    project: {
      en: "Navigation & Control of a Quadruped Robot (MSc Thesis)",
      de: "Navigation & Steuerung eines Vierbeiner-Roboters (Masterarbeit)",
    },
    title: {
      en: "Quadruped Navigation in<br />Unknown Environments",
      de: "Vierbeiner-Navigation in<br />unbekannten Umgebungen",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2026",
    role: { en: "MSc Thesis (IFRoS)", de: "Masterarbeit (IFRoS)" },
    stack: [
      "ROS 2",
      "Point-LIO SLAM",
      "NDT Localization",
      "Hybrid A*",
      "MPPI",
      "Unitree Go2",
      "React + Laravel",
      "WebRTC / NATS / DTLS",
    ],
    description: {
      en: "An end-to-end navigation and remote-supervision system for a Unitree Go2 EDU quadruped used for indoor inspection and security patrols. A ROS 2 autonomy stack — LiDAR-inertial mapping, map-based localization, planning, control, and autonomous exploration — is paired with a browser platform for authenticated, low-latency teleoperation: live video, telemetry, a live map, and click-to-go navigation goals.",
      de: "Ein durchgängiges System zur Navigation und Fernüberwachung eines Unitree Go2 EDU Vierbeiner-Roboters für Innenrauminspektion und Sicherheitspatrouillen. Ein ROS-2-Autonomie-Stack — LiDAR-inertiale Kartierung, kartenbasierte Lokalisierung, Planung, Regelung und autonome Exploration — wird mit einer Browser-Plattform für authentifizierte, latenzarme Teleoperation kombiniert: Live-Video, Telemetrie, Live-Karte und Navigationsziele per Klick.",
    },
    features: [
      {
        en: "Autonomous mapping with Point-LIO LiDAR-inertial odometry and OctoMap occupancy grids from the sparse Unitree L1 LiDAR",
        de: "Autonome Kartierung mit Point-LIO LiDAR-inertialer Odometrie und OctoMap-Belegungsgittern aus dem dünn besetzten Unitree-L1-LiDAR",
      },
      {
        en: "Map-based NDT localization adapted to the non-repetitive L1 via scan accumulation and acceptance gates — 0.20 m XY RMSE and 4.0° yaw vs. the Point-LIO reference",
        de: "Kartenbasierte NDT-Lokalisierung, an das nicht-repetitive L1 angepasst durch Scan-Akkumulation und Akzeptanz-Gates — 0,20 m XY-RMSE und 4,0° Gier gegenüber der Point-LIO-Referenz",
      },
      {
        en: "Goal navigation with Hybrid A* global planning (median 356 ms) and an MPPI local controller (median 34 ms compute)",
        de: "Zielnavigation mit globaler Hybrid-A*-Planung (Median 356 ms) und einem lokalen MPPI-Regler (Median 34 ms Rechenzeit)",
      },
      {
        en: "Autonomous frontier-based exploration that builds and saves a map for later localization and navigation",
        de: "Autonome grenzbasierte Exploration, die eine Karte für spätere Lokalisierung und Navigation erstellt und speichert",
      },
      {
        en: "Browser teleoperation platform (React, Laravel, PostgreSQL, NATS, DTLS, WebRTC) with authenticated, exclusive per-robot control and a ~44 ms browser-to-robot round-trip",
        de: "Browser-Teleoperationsplattform (React, Laravel, PostgreSQL, NATS, DTLS, WebRTC) mit authentifizierter, exklusiver Steuerung pro Roboter und ~44 ms Round-Trip vom Browser zum Roboter",
      },
      {
        en: "Validated end to end on a real Unitree Go2 in an indoor environment, covering mapping, localization, navigation, exploration, and web supervision",
        de: "Durchgängig auf einem realen Unitree Go2 in einer Innenraumumgebung validiert — Kartierung, Lokalisierung, Navigation, Exploration und Web-Überwachung",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/msc-thesis.mp4",
    },
  },

  // ==================== ROBOTICS ====================
  {
    id: 20,
    slug: "warehouse-surveillance",
    project: {
      en: "Warehouse Surveillance Robot",
      de: "Lager-Überwachungsroboter",
    },
    title: {
      en: "Warehouse<br />Surveillance Robot",
      de: "Lager-Überwachungs-<br />roboter",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: { en: "Team of 3", de: "Team aus 3 Personen" },
    stack: ["ROS", "YOLOv8", "ByteTrack", "Python", "Gazebo"],
    description: {
      en: "Autonomous warehouse security robot using YOLOv8 person detection, ByteTrack multi-object tracking, and ArUco marker authorization to identify and pursue intruders in real time.",
      de: "Autonomer Lager-Sicherheitsroboter, der YOLOv8-Personenerkennung, ByteTrack-Multi-Objekt-Tracking und ArUco-Marker-Autorisierung nutzt, um Eindringlinge in Echtzeit zu identifizieren und zu verfolgen.",
    },
    features: [
      {
        en: "YOLOv8n detects people at 30 FPS; ByteTrack maintains persistent track IDs across occlusions",
        de: "YOLOv8n erkennt Personen mit 30 FPS; ByteTrack hält Tracking-IDs auch bei Verdeckungen aufrecht",
      },
      {
        en: "ArUco chest-ROI scan authorizes workers (ID=7 = green) and flags intruders (red)",
        de: "ArUco-Brust-ROI-Scan autorisiert Mitarbeiter (ID=7 = grün) und markiert Eindringlinge (rot)",
      },
      {
        en: "Reactive controller pursues the largest intruder with proportional angular control and safe approach speed",
        de: "Reaktiver Regler verfolgt den größten Eindringling mit proportionaler Winkelregelung und sicherer Annäherungsgeschwindigkeit",
      },
      {
        en: "Tested on real webcam and in a Gazebo/Pedsim warehouse with 9 autonomous agents",
        de: "Getestet mit einer echten Webcam und in einer Gazebo/Pedsim-Lagerumgebung mit 9 autonomen Agenten",
      },
      {
        en: "Full ROS Noetic pipeline: camera → detection → tracking → authorization → /cmd_vel",
        de: "Vollständige ROS-Noetic-Pipeline: Kamera → Erkennung → Tracking → Autorisierung → /cmd_vel",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/warehouse-surveillance.mp4",
    },
    repository: "https://github.com/190ibrahim/warehouse-surveillance",
    featured: true,
  },
  {
    id: 21,
    slug: "crazyflie-swarm-mission",
    project: {
      en: "Crazyflie Swarm Coordination",
      de: "Crazyflie-Schwarmkoordination",
    },
    title: {
      en: "Crazyflie Swarm<br />Coordination",
      de: "Crazyflie-Schwarm-<br />koordination",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2026",
    role: { en: "Team of 5", de: "Team aus 5 Personen" },
    stack: ["ROS2", "Gazebo", "Crazyflie", "Python", "Consensus"],
    description: {
      en: "Multi-robot Crazyflie system combining consensus-based formation control with auction-based task allocation for synchronized single-robot and multi-robot missions.",
      de: "Multi-Roboter-Crazyflie-System, das konsensbasierte Formationsregelung mit auktionsbasierter Aufgabenverteilung für synchronisierte Einzel- und Mehrroboter-Missionen kombiniert.",
    },
    features: [
      {
        en: "Implemented rendezvous, line, square, and triangle formations with collision-aware separation forces",
        de: "Rendezvous-, Linien-, Quadrat- und Dreiecksformationen mit kollisionsbewussten Separationskräften implementiert",
      },
      {
        en: "Compared fully connected, star, and ring communication topologies in ROS2/Gazebo simulation",
        de: "Vollvermaschte, Stern- und Ring-Kommunikationstopologien in ROS2/Gazebo verglichen",
      },
      {
        en: "Built an auction scheduler for mission graphs with task dependencies, wait states, and multi-robot tasks",
        de: "Auktionsbasierten Scheduler für Missionsgraphen mit Abhängigkeiten, Wartezuständen und Mehrroboter-Aufgaben entwickelt",
      },
      {
        en: "Executed planned missions through a ROS2 state-machine node publishing velocity commands to four Crazyflies",
        de: "Geplante Missionen über einen ROS2-Zustandsautomaten ausgeführt, der Geschwindigkeitsbefehle an vier Crazyflies publiziert",
      },
      {
        en: "Validated behavior in simulation and transferred formation control to real Crazyflie flight tests",
        de: "Verhalten in der Simulation validiert und Formationsregelung auf reale Crazyflie-Flugtests übertragen",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/crazyflie-swarm-mission.mp4",
    },
    featured: true,
  },
  {
    id: 22,
    slug: "multi-robot-flocking-obstacle-avoidance",
    project: {
      en: "Multi-Robot Flocking and Obstacle Avoidance Simulation",
      de: "Multi-Roboter-Flocking und Hindernisvermeidung",
    },
    title: {
      en: "Multi-Robot Flocking<br />& Obstacle Avoidance",
      de: "Multi-Roboter-Flocking<br />& Hindernisvermeidung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: { en: "Team of 5", de: "Team aus 5 Personen" },
    stack: ["ROS2", "Python", "Boids", "Obstacle Avoidance"],
    description: {
      en: "ROS2 Stage simulation of a multi-robot flocking controller using cohesion, separation, and alignment behaviors with obstacle avoidance in maze-like maps.",
      de: "ROS2-Stage-Simulation eines Multi-Roboter-Flocking-Reglers mit Kohäsion, Separation und Alignment sowie Hindernisvermeidung in labyrinthartigen Karten.",
    },
    features: [
      {
        en: "Implemented distributed flocking behavior with cohesion, separation, and alignment terms",
        de: "Verteiltes Flocking-Verhalten mit Kohäsions-, Separations- und Alignment-Anteilen implementiert",
      },
      {
        en: "Added obstacle and wall avoidance so the robot group can move through constrained maze maps",
        de: "Hindernis- und Wandvermeidung ergänzt, damit die Robotergruppe durch eingeschränkte Labyrinthkarten navigieren kann",
      },
      {
        en: "Tested map scenarios with 10 robots in Stage and visualized the group motion in real time",
        de: "Kartenszenarien mit 10 Robotern in Stage getestet und die Gruppenbewegung in Echtzeit visualisiert",
      },
      {
        en: "Analyzed parameter effects including cohesion, alignment, separation, field of view, and velocity",
        de: "Parametereffekte wie Kohäsion, Alignment, Separation, Sichtfeld und Geschwindigkeit analysiert",
      }
    ],
    media: {
      type: "video",
      src: "/media/projects/multi-robot-flocking-obstacle-avoidance.mp4",
    },
    featured: true,
  },
  {
    id: 1,
    slug: "stereo-visual-odometry-kitti",
    project: {
      en: "Stereo Visual Odometry (KITTI)",
      de: "Stereo-Visual-Odometry (KITTI)",
    },
    title: {
      en: "Stereo Visual<br />Odometry — KITTI",
      de: "Stereo-Visual-<br />Odometry — KITTI",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: { en: "Team of 3", de: "Team aus 3 Personen" },
    stack: ["Python", "OpenCV", "NumPy", "KITTI"],
    description: {
      en: "A stereo visual odometry pipeline that estimates camera motion and reconstructs sparse 3D points from KITTI stereo sequences.",
      de: "Eine Stereo-Visual-Odometry-Pipeline, die Kamerabewegungen schätzt und dünn besetzte 3D-Punkte aus KITTI-Stereosequenzen rekonstruiert.",
    },
    features: [
      {
        en: "Stereo matching and triangulation to recover 3D landmarks from left/right image pairs",
        de: "Stereo-Matching und Triangulation zur Rekonstruktion von 3D-Landmarken aus linken/rechten Bildpaaren",
      },
      {
        en: "Feature detection, descriptor matching, and temporal tracking across frames",
        de: "Feature-Erkennung, Deskriptor-Matching und zeitliches Tracking über Frames hinweg",
      },
      {
        en: "Relative pose estimation from essential-matrix decomposition with bundle-adjusted refinement",
        de: "Relative Posenschätzung durch Zerlegung der essenziellen Matrix mit Bundle-Adjustment-Verfeinerung",
      },
      {
        en: "Outputs KITTI-format trajectory files and visualizes estimated vs. ground-truth paths",
        de: "Ausgabe von Trajektoriedateien im KITTI-Format und Visualisierung von geschätzten vs. Ground-Truth-Pfaden",
      },
      {
        en: "Implemented in Python with OpenCV and NumPy for reproducible experiments",
        de: "In Python mit OpenCV und NumPy implementiert für reproduzierbare Experimente",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/stereo-visual-odometry.mp4",
    },
    repository: "https://github.com/190ibrahim/stereo-visual-odometry-kitti",
    featured: true,
  },
  {
    id: 2,
    slug: "exploration-global-local-planning",
    project: {
      en: "Exploration with Global–Local Planning Architecture",
      de: "Exploration mit globaler & lokaler Planungsarchitektur",
    },
    title: {
      en: "Exploration —<br />Global &amp; Local Planning",
      de: "Exploration —<br />Globale &amp; lokale Planung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: { en: "Team of 3", de: "Team aus 3 Personen" },
    stack: ["ROS", "Python", "RRT*", "DWA"],
    description: {
      en: "A hybrid exploration framework integrating frontier detection for goal generation with global and local planning strategies in ROS.",
      de: "Ein hybrides Explorations-Framework, das Frontier-Erkennung zur Zielgenerierung mit globalen und lokalen Planungsstrategien in ROS verbindet.",
    },
    features: [
      {
        en: "Global RRT* planner and local DWA controller for autonomous navigation",
        de: "Globaler RRT*-Planer und lokaler DWA-Regler für autonome Navigation",
      },
      {
        en: "Frontier clustering, centroid extraction, and viewpoint validation",
        de: "Frontier-Clustering, Schwerpunktextraktion und Viewpoint-Validierung",
      },
      {
        en: "Path smoothing and waypoint reduction over occupancy-grid maps",
        de: "Pfadglättung und Reduzierung von Wegpunkten auf Occupancy-Grid-Karten",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/exploration-global-local-planning.mp4",
    },
    repository: "https://github.com/190ibrahim/Exploration_Global_Local_Planning",
    featured: true,
  },
  {
    id: 3,
    slug: "vehicle-manipulator-system",
    project: {
      en: "Vehicle–Manipulator System",
      de: "Fahrzeug-Manipulator-System",
    },
    title: {
      en: "Vehicle–Manipulator<br />System",
      de: "Fahrzeug-Manipulator-<br />System",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Team of 3", de: "Team aus 3 Personen" },
    stack: ["ROS", "Behavior Trees", "ArUco", "Python"],
    description: {
      en: "Control architecture for coordinated motion between a mobile base and a manipulator for autonomous intervention tasks.",
      de: "Regelungsarchitektur für die koordinierte Bewegung einer mobilen Basis und eines Manipulators für autonome Interventionsaufgaben.",
    },
    features: [
      {
        en: "Behavior-tree control structure in ROS for multi-task coordination",
        de: "Behavior-Tree-Steuerstruktur in ROS für die Koordination mehrerer Aufgaben",
      },
      {
        en: "Kinematics and task-priority controllers for precise end-effector control",
        de: "Kinematik- und Task-Priority-Regler für präzise Endeffektor-Steuerung",
      },
      {
        en: "ArUco-marker-based visual feedback for autonomous pick-and-place",
        de: "ArUco-Marker-basiertes visuelles Feedback für autonomes Pick-and-Place",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/vehicle-manipulator-system.mp4",
    },
    repository: "https://github.com/190ibrahim/Vehicle_Manipulator_System",
    featured: true,
  },
  {
    id: 4,
    slug: "graph-slam-line-features",
    project: {
      en: "Graph SLAM with Line Features",
      de: "Graph SLAM mit Linien-Features",
    },
    title: {
      en: "Graph SLAM<br />with Line Features",
      de: "Graph SLAM<br />mit Linien-Features",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Team of 3", de: "Team aus 3 Personen" },
    stack: ["Python", "GTSAM", "LiDAR", "EKF"],
    description: {
      en: "Graph SLAM using LiDAR-derived line features for robust localization and mapping.",
      de: "Graph SLAM unter Verwendung von aus LiDAR abgeleiteten Linien-Features für robuste Lokalisierung und Kartierung.",
    },
    features: [
      {
        en: "EKF pose estimation combined with LiDAR line features",
        de: "EKF-Posenschätzung kombiniert mit LiDAR-Linien-Features",
      },
      {
        en: "Line perception via split-and-merge segmentation with covariance estimation",
        de: "Linien-Wahrnehmung durch Split-and-Merge-Segmentierung mit Kovarianzschätzung",
      },
      {
        en: "Custom GTSAM factor graph with pose and observation factors for trajectory optimization",
        de: "Eigener GTSAM-Faktorgraph mit Posen- und Beobachtungsfaktoren zur Trajektorienoptimierung",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/graph-slam-line-features.mp4",
    },
    repository: "https://github.com/190ibrahim/Graph_SLAM_Line_Features",
    featured: true,
  },
  {
    id: 5,
    slug: "map-based-localization-ekf",
    project: {
      en: "Map-Based Localization using EKF",
      de: "Kartenbasierte Lokalisierung mit EKF",
    },
    title: {
      en: "Map-Based Localization<br />using EKF",
      de: "Kartenbasierte<br />Lokalisierung mit EKF",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Solo project", de: "Einzelprojekt" },
    stack: ["Python", "NumPy", "Matplotlib"],
    description: {
      en: "Extended Kalman Filter for accurate robot localization using landmark-based measurements.",
      de: "Extended Kalman Filter für eine präzise Roboterlokalisierung auf Basis landmarkenbasierter Messungen.",
    },
    features: [
      {
        en: "Designed motion and measurement models",
        de: "Entwurf von Bewegungs- und Messmodellen",
      },
      {
        en: "Real-time state estimation",
        de: "Echtzeit-Zustandsschätzung",
      },
      {
        en: "Implemented in Python with NumPy and Matplotlib",
        de: "Implementiert in Python mit NumPy und Matplotlib",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/map-based-localization-ekf.mp4",
    },
    repository: "https://github.com/190ibrahim/Map_Based_Localization_EKF",
  },
  {
    id: 14,
    slug: "feature-ekf-slam-localization",
    project: {
      en: "Feature EKF SLAM Localization",
      de: "Feature-EKF-SLAM-Lokalisierung",
    },
    title: {
      en: "Feature EKF SLAM<br />Localization",
      de: "Feature-EKF-SLAM-<br />Lokalisierung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Team of 2", de: "Team aus 2 Personen" },
    stack: ["Python", "NumPy", "Matplotlib", "EKF SLAM"],
    description: {
      en: "Feature-based Extended Kalman Filter SLAM for simultaneous robot localization and landmark mapping without a known map.",
      de: "Feature-basiertes Extended Kalman Filter SLAM für simultane Roboterlokalisierung und Landmarkenkartierung ohne vorgegebene Karte.",
    },
    features: [
      {
        en: "Implemented EKF SLAM prediction and update steps for a differential-drive robot",
        de: "Implementierung von EKF-SLAM-Prädiktions- und Update-Schritten für einen Differentialantriebs-Roboter",
      },
      {
        en: "Added landmark initialization when new Cartesian features are observed",
        de: "Landmarken-Initialisierung beim Beobachten neuer kartesischer Features",
      },
      {
        en: "Used data association to match sensor observations with mapped landmarks",
        de: "Datenassoziation zum Abgleich von Sensorbeobachtungen mit kartierten Landmarken",
      },
      {
        en: "Visualized robot trajectory, landmark estimates, uncertainty ellipses, and error statistics",
        de: "Visualisierung von Robotertrajektorie, Landmarkenschätzungen, Unsicherheits-Ellipsen und Fehlerstatistiken",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/feature-ekf-slam-localization.mp4",
    },
    repository: "https://github.com/190ibrahim/Feature-EKF-Slam-Localization.git",
  },
  {
    id: 6,
    slug: "particle-filter-localization",
    project: {
      en: "Particle Filter Robot Localization",
      de: "Roboterlokalisierung mit Partikelfilter",
    },
    title: {
      en: "Particle Filter<br />Robot Localization",
      de: "Partikelfilter-<br />Roboterlokalisierung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Solo project", de: "Einzelprojekt" },
    stack: ["Python", "NumPy", "Matplotlib"],
    description: {
      en: "Particle Filter for estimating a robot's position from sensor data and motion models.",
      de: "Partikelfilter zur Schätzung der Roboterposition aus Sensordaten und Bewegungsmodellen.",
    },
    features: [
      {
        en: "Particle sampling and resampling",
        de: "Partikel-Sampling und Resampling",
      },
      {
        en: "Motion and observation models",
        de: "Bewegungs- und Beobachtungsmodelle",
      },
      {
        en: "Implemented in Python with NumPy and Matplotlib",
        de: "Implementiert in Python mit NumPy und Matplotlib",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/particle-filter-localization.mp4",
    },
    repository: "https://github.com/190ibrahim/Particl_Filter_Robot_Localization-",
  },
  {
    id: 18,
    slug: "astar-path-planning",
    project: {
      en: "A* Path Planning",
      de: "A*-Pfadplanung",
    },
    title: {
      en: "A* Path<br />Planning",
      de: "A*-<br />Pfadplanung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Team of 2", de: "Team aus 2 Personen" },
    stack: ["Python", "A*", "NumPy", "Matplotlib", "PIL"],
    description: {
      en: "Discrete A* algorithm for optimal path planning on 2D grid maps, supporting both 4-connectivity and 8-connectivity with Euclidean heuristic.",
      de: "Diskreter A*-Algorithmus für optimale Pfadplanung auf 2D-Gitterkarten, mit Unterstützung für 4er- und 8er-Konnektivität sowie euklidischer Heuristik.",
    },
    features: [
      {
        en: "A* with connect-4 and connect-8 neighbour expansion on binarized grid maps",
        de: "A* mit 4er- und 8er-Nachbarschaftsexpansion auf binarisierten Gitterkarten",
      },
      {
        en: "Euclidean distance heuristic with priority-queue open set for O(log n) node expansion",
        de: "Euklidische Distanz-Heuristik mit Priority-Queue als Open-Set für O(log n)-Knotenexpansion",
      },
      {
        en: "Visibility graph construction and shortest-path search on polygon environments",
        de: "Aufbau von Sichtbarkeitsgraphen und Kürzeste-Wege-Suche in Polygon-Umgebungen",
      },
      {
        en: "Tested across eight maps of increasing complexity, from open fields to dense mazes",
        de: "Getestet auf acht Karten zunehmender Komplexität, von offenen Feldern bis zu dichten Labyrinthen",
      },
      {
        en: "Outputs optimal path coordinates and total Euclidean path cost",
        de: "Ausgabe der optimalen Pfadkoordinaten und gesamten euklidischen Pfadkosten",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/astar-path-planning.mp4",
    },
    repository: "https://github.com/190ibrahim",
  },
  {
    id: 19,
    slug: "aruco-opencv",
    project: {
      en: "ArUco Markers & Augmented Reality",
      de: "ArUco-Marker & Augmented Reality",
    },
    title: {
      en: "ArUco Markers<br />&amp; Augmented Reality",
      de: "ArUco-Marker<br />&amp; Augmented Reality",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: { en: "Team of 2", de: "Team aus 2 Personen" },
    stack: ["C++", "OpenCV", "ArUco", "CMake"],
    description: {
      en: "A five-lab series progressing from ArUco marker generation and detection to full camera calibration and real-time augmented reality with pose estimation.",
      de: "Eine Reihe von fünf Übungen, die von der Erzeugung und Erkennung von ArUco-Markern über die vollständige Kamerakalibrierung bis hin zu Echtzeit-Augmented-Reality mit Posenschätzung reicht.",
    },
    features: [
      {
        en: "Generated single ArUco markers and grid boards from OpenCV dictionaries",
        de: "Erzeugung einzelner ArUco-Marker und Grid-Boards aus OpenCV-Wörterbüchern",
      },
      {
        en: "Real-time marker detection with green border overlay and ID display",
        de: "Echtzeit-Markererkennung mit grünem Rahmen-Overlay und ID-Anzeige",
      },
      {
        en: "Camera calibration using an ArUco board — estimated intrinsics and distortion coefficients",
        de: "Kamerakalibrierung mit einem ArUco-Board — Schätzung der intrinsischen Parameter und Verzeichnungskoeffizienten",
      },
      {
        en: "6-DoF pose estimation per marker using calibrated camera parameters",
        de: "6-DoF-Posenschätzung pro Marker anhand der kalibrierten Kameraparameter",
      },
      {
        en: "Augmented reality: virtual 3D cube rendered on top of live marker feed",
        de: "Augmented Reality: virtueller 3D-Würfel, der auf den Live-Marker-Feed gerendert wird",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/aruco-opencv.mp4",
    },
    repository: "https://github.com/190ibrahim",
  },
  {
    id: 17,
    slug: "rrt-path-planning",
    project: {
      en: "RRT & RRT* Path Planning",
      de: "RRT- & RRT*-Pfadplanung",
    },
    title: {
      en: "RRT &amp; RRT*<br />Path Planning",
      de: "RRT &amp; RRT*<br />Pfadplanung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Team of 2", de: "Team aus 2 Personen" },
    stack: ["Python", "RRT", "RRT*", "NumPy", "Matplotlib"],
    description: {
      en: "Sampling-based motion planning using RRT and RRT* algorithms to solve 2D path planning problems across grid map environments of varying complexity.",
      de: "Sampling-basierte Bewegungsplanung mit RRT- und RRT*-Algorithmen zur Lösung von 2D-Pfadplanungsproblemen in Gitterkarten unterschiedlicher Komplexität.",
    },
    features: [
      {
        en: "Implemented RRT and RRT* from scratch in Python for 2D grid maps",
        de: "RRT und RRT* von Grund auf in Python für 2D-Gitterkarten implementiert",
      },
      {
        en: "Binarized grayscale map images to define free vs. occupied space",
        de: "Binarisierung von Graustufen-Kartenbildern zur Definition von freiem und belegtem Raum",
      },
      {
        en: "Path smoothing to reduce waypoints while maintaining collision-free trajectories",
        de: "Pfadglättung zur Reduktion von Wegpunkten bei gleichzeitiger Beibehaltung kollisionsfreier Trajektorien",
      },
      {
        en: "Tested on four maps ranging from open spaces to complex mazes",
        de: "Getestet auf vier Karten von offenen Räumen bis zu komplexen Labyrinthen",
      },
      {
        en: "RRT* converges to an asymptotically optimal path via rewiring",
        de: "RRT* konvergiert durch Rewiring zu einem asymptotisch optimalen Pfad",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/rrt-path-planning.mp4",
    },
    repository: "https://github.com/190ibrahim",
  },
  {
    id: 7,
    slug: "feature-extraction-image-registration",
    project: {
      en: "Feature Extraction & Image Registration",
      de: "Feature-Extraktion & Bildregistrierung",
    },
    title: {
      en: "Feature Extraction<br />&amp; Image Registration",
      de: "Feature-Extraktion<br />&amp; Bildregistrierung",
    },
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: { en: "Team of 2", de: "Team aus 2 Personen" },
    stack: ["Python", "OpenCV", "SIFT", "ORB", "RANSAC"],
    description: {
      en: "Feature-based image registration pipeline using SIFT, ORB, and RANSAC.",
      de: "Feature-basierte Bildregistrierungs-Pipeline mit SIFT, ORB und RANSAC.",
    },
    features: [
      {
        en: "Extracted key points and descriptors",
        de: "Extraktion von Schlüsselpunkten und Deskriptoren",
      },
      {
        en: "Applied transformation matrices for image alignment",
        de: "Anwendung von Transformationsmatrizen zur Bildausrichtung",
      },
      {
        en: "Used OpenCV and NumPy for implementation",
        de: "Verwendung von OpenCV und NumPy für die Implementierung",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/feature-extraction-image-registration.mp4",
    },
    repository:
      "https://github.com/190ibrahim/Computer_Vision_Feature_Extraction_and_Image_Registration",
  },

  // ==================== AI / ML ====================
  {
    id: 8,
    slug: "uxo-segmentation",
    project: {
      en: "Sparsely Annotated UXO Segmentation",
      de: "Spärlich annotierte UXO-Segmentierung",
    },
    title: {
      en: "Sparsely Annotated<br />UXO Segmentation",
      de: "Spärlich annotierte<br />UXO-Segmentierung",
    },
    category: CATEGORIES.AI_ML,
    year: "2025",
    role: { en: "Team of 3", de: "Team aus 3 Personen" },
    stack: ["PyTorch", "Python", "Tree Energy Loss"],
    description: {
      en: "Weakly supervised semantic segmentation for detecting unexploded ordnance (UXO) using limited pixel annotations.",
      de: "Schwach überwachte semantische Segmentierung zur Erkennung nicht detonierter Sprengkörper (UXO) mit begrenzten Pixel-Annotationen.",
    },
    features: [
      {
        en: "Tree Energy Loss (TEL) and class-weighted cross-entropy for extreme class imbalance",
        de: "Tree Energy Loss (TEL) und klassen­gewichtete Cross-Entropy bei extremem Klassenungleichgewicht",
      },
      {
        en: "Preprocessing and augmentation: patch extraction, photometric transforms",
        de: "Vorverarbeitung und Augmentierung: Patch-Extraktion, photometrische Transformationen",
      },
      {
        en: "Trained and compared multiple deep learning models on sparse labels",
        de: "Training und Vergleich mehrerer Deep-Learning-Modelle mit spärlichen Labels",
      },
    ],
    media: {
      type: "image",
      src: "/media/projects/uxo.jpg",
    },
    repository: "https://github.com/190ibrahim/Sparsely_Annotated_UXO_Segmentation",
    featured: true,
  },
  {
    id: 9,
    slug: "mlffs-thesis",
    project: {
      en: "MLFFs for Transition Metal Complexes (BSc Thesis)",
      de: "MLFFs für Übergangsmetallkomplexe (BSc-Abschlussarbeit)",
    },
    title: {
      en: "MLFFs for Transition<br />Metal Complexes",
      de: "MLFFs für<br />Übergangsmetallkomplexe",
    },
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: { en: "BSc Thesis", de: "BSc-Abschlussarbeit" },
    stack: ["XGBoost", "Neural Networks", "Python", "tmQM"],
    description: {
      en: "Machine learning models predicting the HOMO–LUMO gap in transition metal complexes — achieving an MSE of 0.0004 with XGBoost.",
      de: "Machine-Learning-Modelle zur Vorhersage der HOMO–LUMO-Lücke in Übergangsmetallkomplexen — mit einem MSE von 0,0004 unter Verwendung von XGBoost.",
    },
    features: [
      {
        en: "Trained on the tmQM dataset",
        de: "Trainiert auf dem tmQM-Datensatz",
      },
      {
        en: "XGBoost and neural networks for regression",
        de: "XGBoost und neuronale Netze für die Regression",
      },
      {
        en: "Achieved MSE of 0.0004 with XGBoost",
        de: "MSE von 0,0004 mit XGBoost erreicht",
      },
    ],
    media: {
      type: "image",
      src: "/media/projects/mlffs-thesis.jpeg",
    },
    repository: "https://github.com/190ibrahim/MLFFs_Transition_Metal_Complexes_BSc_Thesis",
    featured: true,
  },
  {
    id: 10,
    slug: "explainable-ai",
    project: {
      en: "Explainable AI (XAI)",
      de: "Erklärbare KI (XAI)",
    },
    title: {
      en: "Explainable AI<br />(XAI)",
      de: "Erklärbare KI<br />(XAI)",
    },
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: { en: "Solo project", de: "Einzelprojekt" },
    stack: ["SHAP", "LIME", "Grad-CAM", "Python"],
    description: {
      en: "Techniques to improve transparency and interpretability of machine learning models.",
      de: "Methoden zur Verbesserung der Transparenz und Interpretierbarkeit von Machine-Learning-Modellen.",
    },
    features: [
      {
        en: "Implemented SHAP, LIME, and Grad-CAM",
        de: "Implementierung von SHAP, LIME und Grad-CAM",
      },
      {
        en: "Analyzed feature importance and model decisions",
        de: "Analyse der Feature-Wichtigkeit und Modellentscheidungen",
      },
      {
        en: "Applied XAI methods to deep learning models",
        de: "Anwendung von XAI-Methoden auf Deep-Learning-Modelle",
      },
    ],
    media: {
      type: "image",
      src: "/media/projects/explainable-ai.jpg",
    },
    repository: "https://github.com/190ibrahim/Explainable_AI",
  },
  {
    id: 11,
    slug: "rl-for-robotics",
    project: {
      en: "Reinforcement Learning for Robotics",
      de: "Reinforcement Learning für Robotik",
    },
    title: {
      en: "Reinforcement Learning<br />for Robotics",
      de: "Reinforcement Learning<br />für Robotik",
    },
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: { en: "Team of 2", de: "Team aus 2 Personen" },
    stack: ["TensorFlow", "OpenAI Gym", "DQN"],
    description: {
      en: "Deep Q-Learning (DQN) and Policy Gradient methods applied to robotic control.",
      de: "Deep Q-Learning (DQN) und Policy-Gradient-Methoden, angewandt auf die Robotersteuerung.",
    },
    features: [
      {
        en: "Trained an agent to navigate an environment",
        de: "Training eines Agenten zur Navigation in einer Umgebung",
      },
      {
        en: "Reward-based learning for decision making",
        de: "Belohnungsbasiertes Lernen für die Entscheidungsfindung",
      },
      {
        en: "Built with TensorFlow and OpenAI Gym",
        de: "Aufgebaut mit TensorFlow und OpenAI Gym",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/rl-for-robotics.mp4",
    },
    repository: "https://github.com/190ibrahim/Reinforcement_Learning",
  },
  {
    id: 12,
    slug: "football-data-analysis",
    project: {
      en: "Football Data Analysis",
      de: "Fußball-Datenanalyse",
    },
    title: {
      en: "Football Data<br />Analysis",
      de: "Fußball-<br />Datenanalyse",
    },
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: { en: "Solo project", de: "Einzelprojekt" },
    stack: ["Python", "Pandas", "Matplotlib", "Transfermarkt"],
    description: {
      en: "Exploration of player statistics, team performance, and trends in football using data visualization and analytical techniques.",
      de: "Analyse von Spielerstatistiken, Mannschaftsleistung und Trends im Fußball mithilfe von Datenvisualisierung und Analysetechniken.",
    },
    features: [
      {
        en: "Gathered and cleaned data from Transfermarkt",
        de: "Erhebung und Bereinigung von Daten aus Transfermarkt",
      },
      {
        en: "Insights into player stats, team performance, and football analytics",
        de: "Erkenntnisse zu Spielerstatistiken, Mannschaftsleistung und Fußball-Analytik",
      },
      {
        en: "Visualized age distribution, performance trends, and valuation metrics",
        de: "Visualisierung von Altersverteilung, Leistungstrends und Bewertungsmetriken",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/football-data-analysis.mp4",
    },
    repository: "https://github.com/190ibrahim/Football_data_analysis-",
  },

  // ==================== SOFTWARE ====================
  {
    id: 13,
    slug: "eventify-up",
    project: {
      en: "EventifyUP",
      de: "EventifyUP",
    },
    title: {
      en: "EventifyUP<br />Platform",
      de: "EventifyUP-<br />Plattform",
    },
    category: CATEGORIES.SOFTWARE,
    year: "2023",
    role: { en: "Team of 4", de: "Team aus 4 Personen" },
    stack: ["Laravel", "Angular", "MySQL"],
    description: {
      en: "Web-based platform that simplifies event ticketing at the University of Pécs, eliminating paper tickets with a secure digital experience.",
      de: "Webbasierte Plattform, die das Event-Ticketing an der Universität Pécs vereinfacht und Papiertickets durch ein sicheres digitales Erlebnis ersetzt.",
    },
    features: [
      {
        en: "Built with Laravel and Angular",
        de: "Entwickelt mit Laravel und Angular",
      },
      {
        en: "Unit testing",
        de: "Unit-Tests",
      },
      {
        en: "Calendar integration to display all events",
        de: "Kalenderintegration zur Anzeige aller Veranstaltungen",
      },
      {
        en: "Event search functionality",
        de: "Suchfunktion für Veranstaltungen",
      },
      {
        en: "Admin dashboard with CRUD on users and events",
        de: "Admin-Dashboard mit CRUD-Funktionen für Nutzer und Veranstaltungen",
      },
      {
        en: "Responsive and mobile-friendly interface",
        de: "Responsive und mobilfreundliche Benutzeroberfläche",
      },
    ],
    media: {
      type: "image",
      src: "/media/projects/eventify-up.jpeg",
    },
    repository: "https://github.com/190ibrahim/EventifyPecs-Angular--Laravel",
  },
  {
    id: 16,
    slug: "ping-pong-game",
    project: {
      en: "Ping Pong Game",
      de: "Ping-Pong-Spiel",
    },
    title: {
      en: "Ping Pong<br />Game",
      de: "Ping-Pong-<br />Spiel",
    },
    category: CATEGORIES.SOFTWARE,
    year: "2022",
    role: { en: "Team project", de: "Teamprojekt" },
    stack: ["JavaScript", "Canvas API", "HTML", "CSS"],
    description: {
      en: "A web-based Ping Pong game with dynamically loaded modules for modularity and optimized resource loading.",
      de: "Ein webbasiertes Ping-Pong-Spiel mit dynamisch geladenen Modulen für Modularität und optimiertes Laden von Ressourcen.",
    },
    features: [
      {
        en: "Native JavaScript, HTML, and CSS",
        de: "Natives JavaScript, HTML und CSS",
      },
      {
        en: "Modular OOP architecture for maintainability",
        de: "Modulare OOP-Architektur für bessere Wartbarkeit",
      },
      {
        en: "Single-player and multiplayer modes",
        de: "Einzelspieler- und Mehrspielermodi",
      },
      {
        en: "requestAnimationFrame for smooth gameplay",
        de: "requestAnimationFrame für flüssiges Gameplay",
      },
      {
        en: "Canvas API with mathematical collision detection",
        de: "Canvas-API mit mathematischer Kollisionserkennung",
      },
    ],
    media: {
      type: "video",
      src: "/media/projects/ping-pong-game.mp4",
    },
    repository: "https://github.com/190ibrahim/Web-Application-Project",
    demoURL: "https://190ibrahim.github.io/Web-Application-Project/",
  },
];
