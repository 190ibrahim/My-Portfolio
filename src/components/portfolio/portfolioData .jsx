let PortfolioData = [
  {
  title: "Exploration with<br />Global–Local Planning",
  project: "Exploration with Global–Local Planning Architecture",
  description:
    "Developed a hybrid exploration framework integrating frontier detection for goal generation with global and local planning strategies in ROS.",
  features: [
    "Implemented a global RRT* planner and local DWA controller for autonomous navigation.",
    "Developed frontier clustering, centroid extraction, and viewpoint validation for efficient exploration.",
    "Optimized path smoothing and waypoint reduction for improved coverage in occupancy grid maps.",
  ],
  icon: "uil-compass",
  repository: "https://github.com/190ibrahim/Exploration_Global_Local_Planning",
},

{
  title: "Vehicle–Manipulator<br />System",
  project: "Vehicle–Manipulator System",
  description:
    "Implemented a control architecture for coordinated motion between a mobile base and a manipulator for autonomous intervention tasks.",
  features: [
    "Designed a behavior tree–based control structure in ROS for multi-task coordination.",
    "Developed kinematics and task-priority controllers for precise end-effector control.",
    "Integrated ArUco marker detection for visual feedback and autonomous pick-and-place operations.",
  ],
  icon: "uil-robot",
  repository: "https://github.com/190ibrahim/Vehicle_Manipulator_System",
},

{
  title: "Graph SLAM<br />with Line Features",
  project: "Graph SLAM with Line Features",
  description:
    "Implemented a Graph SLAM system using line features extracted from LiDAR scans for improved localization and mapping.",
  features: [
    "Combined EKF-based pose estimation with LiDAR-derived line features for robust localization.",
    "Developed a line perception node using split-and-merge segmentation and covariance estimation.",
    "Built a custom GTSAM factor graph with pose and observation factors for trajectory optimization.",
  ],
  icon: "uil-map-marker",
  repository: "https://github.com/190ibrahim/Graph_SLAM_Line_Features",
},

{
  title: "Sparsely Annotated<br />UXO Segmentation",
  project: "Sparsely Annotated UXO Segmentation",
  description:
    "Built a weakly supervised semantic segmentation pipeline for detecting unexploded ordnance (UXO) using limited pixel annotations.",
  features: [
    "Implemented Tree Energy Loss (TEL) and class-weighted cross-entropy for handling extreme class imbalance.",
    "Designed preprocessing and augmentation pipelines including patch extraction and photometric transforms.",
    "Trained and compared multiple deep learning models to evaluate segmentation performance on sparse labels.",
  ],
  icon: "uil-brain",
  repository: "https://github.com/190ibrahim/Sparsely_Annotated_UXO_Segmentation",
},

  {
    title: "Content<br />Management System",
    project: "Content Management System",
    description:
      "A CMS is a web application that allows users to easily create, edit, and publish content on a website.",
    features: [
      "User authentication and authorization",
      "WYSIWYG (What You See Is What You Get)",
      "CRUD operations for users and posts",
      "Admin dashboard",
      "Image uploading and management",
    ],
    icon: "uil-web-grid",
    repository: "https://github.com/190ibrahim/CMS",
  },
  {
    title: "Trip4Life<br />App",
    project: "Trip4Life App",
    description:
      "Trip4Life is a web-based application that allows users to plan and book sailing trips to various destinations.",
    features: [
      "User-friendly interface for browsing and booking trips",
      "Secure user login and registration system",
      "Built with PHP, JavaScript, and Bootstrap",
      "User can view, edit, and delete their own bookings",
      "Admin panel for managing destinations, boats, trips, and bookings",
      "Responsive design for optimal viewing on different devices",
      "The application uses prepared statements to prevent SQL injection attacks",
    ],
    icon: "uil-compass",
    repository: "https://github.com/190ibrahim/Trip4Life",
  },
  {
    title: "EventifyUP<br />App",
    project: "EventifyUP",
    description: `A team Project where me and other three students collaborated to build this EventifyUP, 
      a web-based platform designed to simplify the event ticketing process and purchase tickets for events at the University of Pécs.
      EventifyUp eliminates the need for traditional paper tickets
      and offers a streamlined and secure digital ticketing experience.`,
    features: [
      "Built with Laravel and Angular",
      "Unit testing",
      "Calendar integration to display all the events",
      "Event Search Functionality",
      "Admin Dashboard to implement CRUD on users and events",
      "Simple and intuitive event registration process",
      "Responsive and mobile-friendly interface",
      "Demonstrated project management, software development, and collaborative teamwork skills",
    ],
    icon: "uil-ticket",
    repository: "https://github.com/190ibrahim/EventifyPecs-Angular--Laravel",
  },
  {
    title: "Ping Pong <br /> Game",
    project: "Ping Pong Game",
    description: `A web-based Ping Pong game application developed as part of a web application team project.
      This web app leverages dynamic loading of modules to enhance modularity and optimize resource loading.`,
    features: [
      "Built with native javascript, HTML, and CSS",
      "Modular architecture for maintainability and reusability",
      "Single-player and multiplayer modes",
      "Object-Oriented Programming (OOP) structure",
      "Used requestAnimationFrame(), ensuring smooth gameplay and consistent frame rate.",
      "Used Canvas API, allowing for efficient and dynamic graphics rendering.",
      "Collision Detection: The ball-paddle and ball-edge collision detection is implemented using mathematical calculations and logical conditions.",
      "The dynamically imported module is instantiated as an object, providing encapsulated functionality for each game application.",
    ],
    icon: "uil-table-tennis",
    demoURL: `https://190ibrahim.github.io/Web-Application-Project/`,
    repository: "https://github.com/190ibrahim/Web-Application-Project",
  },

  {
    title: "File Organizer Automation",
    project: "File Organizer Automation",
    description:
      "A Python script to automatically organize files based on their types into separate folders.The script effectively streamlined my file management process. With a few clicks, I was able to transform my disorganized downloads folder into a well-structured repository.",
    features: [
      "Sorts files into different folders based on file types",
      "Supports a variety of file extensions",
      "Removes empty folders after organizing files",
      "Enhances file organization and cleanliness",
    ],
    icon: "uil-file-alt",
    repository: "https://github.com/190ibrahim/File-Organization-Automation",
  },
{
  title: "Football Data <br /> Analysis",
  project: "Football Data Analysis",
  description: "Exploration of player statistics, team performance, and trends in football using data visualization and analytical techniques.",
  features: [
    "Gathered and cleaned data from Transfermarkt", 
    "Analyzed Transfermarkt dataset to uncover insights into player stats, team performance, and football analytics.",
    "Data visualization techniques to  present complex findings",
    "Explored features like player age distribution, performance trends, and valuation metrics"
  ],
  icon: "uil-football", 
  repository: "https://github.com/190ibrahim/Football_data_analysis-" 
},
{
  title: "Stereo Visual<br />Odometry",
  project: "Stereo Visual Odometry",
  description: "Designed a visual odometry pipeline using stereo camera images for motion estimation.",
  features: [
    "Extracted key points and tracked features across frames",
    "Estimated camera motion in 3D space using epipolar geometry",
    "Implemented in Python with OpenCV and NumPy"
  ],
  icon: "uil-camera",
  repository: "https://github.com/190ibrahim/Computer_Vision_Stereo_Visual_Odometer",
},
{
  title: "Feature Extraction<br /> & Image Registration",
  project: "Feature Extraction & Image Registration",
  description: "Developed a feature-based image registration pipeline using SIFT, ORB, and RANSAC.",
  features: [
    "Extracted key points and descriptors",
    "Applied transformation matrices for image alignment",
    "Used OpenCV and NumPy for implementation"
  ],
  icon: "uil-image",
  repository: "https://github.com/190ibrahim/Computer_Vision_Feature_Extraction_and_Image_Registration",
},
{
  title: "Map-Based Localization<br /> using EKF",
  project: "Map-Based Localization using EKF",
  description: "Implemented an Extended Kalman Filter for accurate robot localization using landmark-based measurements.",
  features: [
    "Designed motion and measurement models",
    "Performed real-time state estimation",
    "Implemented in Python with NumPy and Matplotlib"
  ],
  icon: "uil-map",
  repository: "https://github.com/190ibrahim/Map_Based_Localization_EKF",
},
{
  title: "Particle Filter<br /> Robot Localization",
  project: "Particle Filter Robot Localization",
  description: "Developed a Particle Filter for estimating a robot’s position based on sensor data and motion models.",
  features: [
    "Implemented particle sampling and resampling",
    "Used motion and observation models",
    "Developed in Python using NumPy and Matplotlib"
  ],
  icon: "uil-robot",
  repository: "https://github.com/190ibrahim/Particl_Filter_Robot_Localization-",
},
{
  title: "Explainable AI<br /> (XAI)",
  project: "Explainable AI (XAI)",
  description: "Developed techniques to improve transparency and interpretability of machine learning models.",
  features: [
    "Implemented SHAP, LIME, and Grad-CAM",
    "Analyzed feature importance and model decisions",
    "Applied XAI methods to deep learning models"
  ],
  icon: "uil-brain",
  repository: "https://github.com/190ibrahim/Explainable_AI",
},
{
  title: "Reinforcement Learning<br /> for Robotics",
  project: "Reinforcement Learning for Robotics",
  description: "Implemented Deep Q-Learning (DQN) and Policy Gradient methods for robotic control.",
  features: [
    "Trained an agent to navigate an environment",
    "Applied reward-based learning for decision making",
    "Used TensorFlow and OpenAI Gym"
  ],
  icon: "uil-graph-bar",
  repository: "https://github.com/190ibrahim/Reinforcement_Learning",
},
{
  title: "MLFFs for<br /> Transition Metal Complexes",
  project: "MLFFs for Transition Metal Complexes (BSc Thesis)",
  description: "Developed machine learning models to predict the HOMO-LUMO gap in transition metal complexes.",
  features: [
    "Trained models on the tmQM dataset",
    "Used XGBoost and Neural Networks for predictions",
    "Achieved an MSE of 0.0004 with XGBoost"
  ],
  icon: "uil-flask",
  repository: "https://github.com/190ibrahim/MLFFs_Transition_Metal_Complexes_BSc_Thesis",
}
];

export default PortfolioData;
