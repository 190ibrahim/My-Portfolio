// Project schema:
// {
//   id, slug, project, title, category, year, role,
//   stack: string[], description, features: string[],
//   media: { type: 'video' | 'image', src, poster? },
//   repository, demoURL?, featured
// }

export const CATEGORIES = {
  ALL: "all",
  ROBOTICS: "robotics",
  AI_ML: "ai/ml",
  SOFTWARE: "software",
};

export const projectsNav = [
  { name: "All", value: CATEGORIES.ALL },
  { name: "Robotics", value: CATEGORIES.ROBOTICS },
  { name: "AI / ML", value: CATEGORIES.AI_ML },
  { name: "Software", value: CATEGORIES.SOFTWARE },
];

export const projectsData = [
  // ==================== ROBOTICS ====================
  {
    id: 1,
    slug: "stereo-visual-odometry-kitti",
    project: "Stereo Visual Odometry (KITTI)",
    title: "Stereo Visual<br />Odometry — KITTI",
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: "Solo project",
    stack: ["Python", "OpenCV", "NumPy", "KITTI"],
    description:
      "A stereo visual odometry pipeline that estimates camera motion and reconstructs sparse 3D points from KITTI stereo sequences.",
    features: [
      "Stereo matching and triangulation to recover 3D landmarks from left/right image pairs",
      "Feature detection, descriptor matching, and temporal tracking across frames",
      "Relative pose estimation from essential-matrix decomposition with bundle-adjusted refinement",
      "Outputs KITTI-format trajectory files and visualizes estimated vs. ground-truth paths",
      "Implemented in Python with OpenCV and NumPy for reproducible experiments",
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
    project: "Exploration with Global–Local Planning Architecture",
    title: "Exploration —<br />Global &amp; Local Planning",
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: "Team of 3",
    stack: ["ROS", "Python", "RRT*", "DWA"],
    description:
      "A hybrid exploration framework integrating frontier detection for goal generation with global and local planning strategies in ROS.",
    features: [
      "Global RRT* planner and local DWA controller for autonomous navigation",
      "Frontier clustering, centroid extraction, and viewpoint validation",
      "Path smoothing and waypoint reduction over occupancy-grid maps",
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
    project: "Vehicle–Manipulator System",
    title: "Vehicle–Manipulator<br />System",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Team of 3",
    stack: ["ROS", "Behavior Trees", "ArUco", "Python"],
    description:
      "Control architecture for coordinated motion between a mobile base and a manipulator for autonomous intervention tasks.",
    features: [
      "Behavior-tree control structure in ROS for multi-task coordination",
      "Kinematics and task-priority controllers for precise end-effector control",
      "ArUco-marker-based visual feedback for autonomous pick-and-place",
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
    project: "Graph SLAM with Line Features",
    title: "Graph SLAM<br />with Line Features",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Team of 3",
    stack: ["Python", "GTSAM", "LiDAR", "EKF"],
    description:
      "Graph SLAM using LiDAR-derived line features for robust localization and mapping.",
    features: [
      "EKF pose estimation combined with LiDAR line features",
      "Line perception via split-and-merge segmentation with covariance estimation",
      "Custom GTSAM factor graph with pose and observation factors for trajectory optimization",
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
    project: "Map-Based Localization using EKF",
    title: "Map-Based Localization<br />using EKF",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Solo project",
    stack: ["Python", "NumPy", "Matplotlib"],
    description:
      "Extended Kalman Filter for accurate robot localization using landmark-based measurements.",
    features: [
      "Designed motion and measurement models",
      "Real-time state estimation",
      "Implemented in Python with NumPy and Matplotlib",
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
  project: "Feature EKF SLAM Localization",
  title: "Feature EKF SLAM<br />Localization",
  category: CATEGORIES.ROBOTICS,
  year: "2024",
  role: "Team of 2",
  stack: ["Python", "NumPy", "Matplotlib", "EKF SLAM"],
  description:
    "Feature-based Extended Kalman Filter SLAM for simultaneous robot localization and landmark mapping without a known map.",
  features: [
    "Implemented EKF SLAM prediction and update steps for a differential-drive robot",
    "Added landmark initialization when new Cartesian features are observed",
    "Used data association to match sensor observations with mapped landmarks",
    "Visualized robot trajectory, landmark estimates, uncertainty ellipses, and error statistics",
  ],
  media: {
    type: "video",
    src: "/media/projects/feature-ekf-slam-localization.mp4",
  },
  repository: "https://github.com/190ibrahim/Feature-EKF-Slam-Localization.git",
}
,
  {
    id: 6,
    slug: "particle-filter-localization",
    project: "Particle Filter Robot Localization",
    title: "Particle Filter<br />Robot Localization",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Solo project",
    stack: ["Python", "NumPy", "Matplotlib"],
    description:
      "Particle Filter for estimating a robot's position from sensor data and motion models.",
    features: [
      "Particle sampling and resampling",
      "Motion and observation models",
      "Implemented in Python with NumPy and Matplotlib",
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
    project: "A* Path Planning",
    title: "A* Path<br />Planning",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Team of 2",
    stack: ["Python", "A*", "NumPy", "Matplotlib", "PIL"],
    description:
      "Discrete A* algorithm for optimal path planning on 2D grid maps, supporting both 4-connectivity and 8-connectivity with Euclidean heuristic.",
    features: [
      "A* with connect-4 and connect-8 neighbour expansion on binarized grid maps",
      "Euclidean distance heuristic with priority-queue open set for O(log n) node expansion",
      "Visibility graph construction and shortest-path search on polygon environments",
      "Tested across eight maps of increasing complexity, from open fields to dense mazes",
      "Outputs optimal path coordinates and total Euclidean path cost",
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
    project: "ArUco Markers & Augmented Reality",
    title: "ArUco Markers<br />&amp; Augmented Reality",
    category: CATEGORIES.ROBOTICS,
    year: "2025",
    role: "Team of 2",
    stack: ["C++", "OpenCV", "ArUco", "CMake"],
    description:
      "A five-lab series progressing from ArUco marker generation and detection to full camera calibration and real-time augmented reality with pose estimation.",
    features: [
      "Generated single ArUco markers and grid boards from OpenCV dictionaries",
      "Real-time marker detection with green border overlay and ID display",
      "Camera calibration using an ArUco board — estimated intrinsics and distortion coefficients",
      "6-DoF pose estimation per marker using calibrated camera parameters",
      "Augmented reality: virtual 3D cube rendered on top of live marker feed",
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
    project: "RRT & RRT* Path Planning",
    title: "RRT &amp; RRT*<br />Path Planning",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Team of 2",
    stack: ["Python", "RRT", "RRT*", "NumPy", "Matplotlib"],
    description:
      "Sampling-based motion planning using RRT and RRT* algorithms to solve 2D path planning problems across grid map environments of varying complexity.",
    features: [
      "Implemented RRT and RRT* from scratch in Python for 2D grid maps",
      "Binarized grayscale map images to define free vs. occupied space",
      "Path smoothing to reduce waypoints while maintaining collision-free trajectories",
      "Tested on four maps ranging from open spaces to complex mazes",
      "RRT* converges to an asymptotically optimal path via rewiring",
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
    project: "Feature Extraction & Image Registration",
    title: "Feature Extraction<br />&amp; Image Registration",
    category: CATEGORIES.ROBOTICS,
    year: "2024",
    role: "Team of 2",
    stack: ["Python", "OpenCV", "SIFT", "ORB", "RANSAC"],
    description:
      "Feature-based image registration pipeline using SIFT, ORB, and RANSAC.",
    features: [
      "Extracted key points and descriptors",
      "Applied transformation matrices for image alignment",
      "Used OpenCV and NumPy for implementation",
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
    project: "Sparsely Annotated UXO Segmentation",
    title: "Sparsely Annotated<br />UXO Segmentation",
    category: CATEGORIES.AI_ML,
    year: "2025",
    role: "Solo project",
    stack: ["PyTorch", "Python", "Tree Energy Loss"],
    description:
      "Weakly supervised semantic segmentation for detecting unexploded ordnance (UXO) using limited pixel annotations.",
    features: [
      "Tree Energy Loss (TEL) and class-weighted cross-entropy for extreme class imbalance",
      "Preprocessing and augmentation: patch extraction, photometric transforms",
      "Trained and compared multiple deep learning models on sparse labels",
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
    project: "MLFFs for Transition Metal Complexes (BSc Thesis)",
    title: "MLFFs for Transition<br />Metal Complexes",
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: "BSc Thesis",
    stack: ["XGBoost", "Neural Networks", "Python", "tmQM"],
    description:
      "Machine learning models predicting the HOMO–LUMO gap in transition metal complexes — achieving an MSE of 0.0004 with XGBoost.",
    features: [
      "Trained on the tmQM dataset",
      "XGBoost and neural networks for regression",
      "Achieved MSE of 0.0004 with XGBoost",
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
    project: "Explainable AI (XAI)",
    title: "Explainable AI<br />(XAI)",
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: "Solo project",
    stack: ["SHAP", "LIME", "Grad-CAM", "Python"],
    description:
      "Techniques to improve transparency and interpretability of machine learning models.",
    features: [
      "Implemented SHAP, LIME, and Grad-CAM",
      "Analyzed feature importance and model decisions",
      "Applied XAI methods to deep learning models",
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
    project: "Reinforcement Learning for Robotics",
    title: "Reinforcement Learning<br />for Robotics",
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: "Solo project",
    stack: ["TensorFlow", "OpenAI Gym", "DQN"],
    description:
      "Deep Q-Learning (DQN) and Policy Gradient methods applied to robotic control.",
    features: [
      "Trained an agent to navigate an environment",
      "Reward-based learning for decision making",
      "Built with TensorFlow and OpenAI Gym",
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
    project: "Football Data Analysis",
    title: "Football Data<br />Analysis",
    category: CATEGORIES.AI_ML,
    year: "2024",
    role: "Solo project",
    stack: ["Python", "Pandas", "Matplotlib", "Transfermarkt"],
    description:
      "Exploration of player statistics, team performance, and trends in football using data visualization and analytical techniques.",
    features: [
      "Gathered and cleaned data from Transfermarkt",
      "Insights into player stats, team performance, and football analytics",
      "Visualized age distribution, performance trends, and valuation metrics",
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
    project: "EventifyUP",
    title: "EventifyUP<br />Platform",
    category: CATEGORIES.SOFTWARE,
    year: "2023",
    role: "Team of 4",
    stack: ["Laravel", "Angular", "MySQL"],
    description:
      "Web-based platform that simplifies event ticketing at the University of Pécs, eliminating paper tickets with a secure digital experience.",
    features: [
      "Built with Laravel and Angular",
      "Unit testing",
      "Calendar integration to display all events",
      "Event search functionality",
      "Admin dashboard with CRUD on users and events",
      "Responsive and mobile-friendly interface",
    ],
    media: {
      type: "image",
      src: "/media/projects/eventify-up.jpeg",
    },
    repository: "https://github.com/190ibrahim/EventifyPecs-Angular--Laravel",
    featured: true,
  },
  {
    id: 16,
    slug: "ping-pong-game",
    project: "Ping Pong Game",
    title: "Ping Pong<br />Game",
    category: CATEGORIES.SOFTWARE,
    year: "2022",
    role: "Team project",
    stack: ["JavaScript", "Canvas API", "HTML", "CSS"],
    description:
      "A web-based Ping Pong game with dynamically loaded modules for modularity and optimized resource loading.",
    features: [
      "Native JavaScript, HTML, and CSS",
      "Modular OOP architecture for maintainability",
      "Single-player and multiplayer modes",
      "requestAnimationFrame for smooth gameplay",
      "Canvas API with mathematical collision detection",
    ],
    media: {
      type: "video",
      src: "/media/projects/ping-pong-game.mp4",
    },
    repository: "https://github.com/190ibrahim/Web-Application-Project",
    demoURL: "https://190ibrahim.github.io/Web-Application-Project/",
  },
];
