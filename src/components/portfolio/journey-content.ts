export const JOURNEY_PHASES = [
  {
    title: "Robotics Foundations & Manipulation Systems",
    period: "Jul — Aug 2025",
    body: "Built foundational understanding of robotics architecture, motion planning, and manipulation using ROS 2 and MoveIt 2. Covered kinematics, URDF modeling, ROS 2 pub-sub architecture, RViz/Gazebo simulation, and MoveIt 2 configuration for a UR10 and Unitree Z1 arm, with hardware exposure to Unitree Go2, B2 and G1 quadrupeds.",
    outcome:
      "Configured a working MoveIt 2 pipeline for the Z1 arm and validated simulation-to-real execution consistency.",
    tags: ["ROS 2", "MoveIt 2", "URDF", "Gazebo", "RViz", "UR10", "Unitree Z1"],
  },
  {
    title: "Vision-Language-Action Research & DexVLA",
    period: "Aug — Sep 2025",
    body: "Conducted a comparative analysis of state-of-the-art VLA models (FRMD, OTTER, DPPO, Lan-o3dp, SmolVLA) against latency, generalization and deployment feasibility. Key insight: existing VLA systems are strong in controlled settings but unsuitable for industrial deployment due to compute cost, poor interpretability and integration challenges.",
    outcome:
      "Implemented the DexVLA pipeline end-to-end — data preprocessing, training and inference — and resolved CUDA/dependency infrastructure issues.",
    tags: ["VLA Models", "DexVLA", "PyTorch", "CUDA", "Benchmarking"],
  },
  {
    title: "Modular Robotic Architecture Design",
    period: "Oct — Dec 2025",
    body: "In response to VLA limitations, designed a modular hybrid system as an alternative to monolithic AI models: a Vision Module (RT-DETR, SAM, Open3D), a Language Module (Phi-3 Mini, spaCy → structured JSON commands), a Planning Module (MoveIt 2, Drake, CasADi), an Execution Module (ROS 2 control) and a Simulation Layer (Isaac Lab).",
    outcome: "A complete, interpretable, deployable robotics architecture blueprint.",
    tags: ["RT-DETR", "SAM", "Open3D", "Phi-3 Mini", "spaCy", "Drake", "CasADi", "Isaac Lab"],
  },
  {
    title: "Fleet Management System (FMS)",
    period: "Dec 2025 — Jan 2026",
    body: "Contributed to a production multi-robot system. Built the UI → MQTT → Backend → ROS 2 → Robot command pipeline, implemented sit/stand robot commands, real-time MongoDB data integration, and state synchronization with safety validation.",
    outcome: "Reliable command delivery and live state sync across the deployed fleet.",
    tags: ["MQTT", "ROS 2", "MongoDB", "Express", "React", "Real-time Systems"],
  },
  {
    title: "Warehouse Management System (WMS)",
    period: "Jan — Mar 2026",
    body: "Designed and built a complete WMS integrated with FMS: a QR-based vision pipeline for task generation, a modular backend API, PostgreSQL task lifecycle storage, and a real-time WebSocket dashboard with live camera feed and inventory view.",
    outcome: "Validated end-to-end with TurtleBot3 + Nav2 simulation.",
    tags: ["PostgreSQL", "WebSockets", "Computer Vision", "Node.js", "TurtleBot3", "Nav2"],
  },
  {
    title: "Multi-Agent Path Planning (MAPF)",
    period: "Mar 2026 — Present",
    body: "Built a collision-free multi-robot planning system implementing CBS (Conflict-Based Search) and SIPP (Safe Interval Path Planning), with reservation-based conflict handling, dynamic obstacle handling and continuous-time planning.",
    outcome: "Validated via RViz and Gazebo across multi-robot scenarios.",
    tags: ["CBS", "SIPP", "Path Planning", "ROS 2", "Gazebo", "RViz"],
  },
];

export const JOURNEY_BONUS = {
  title: "Robot Analytics Dashboard",
  body: "Built a real-time fleet monitoring dashboard (/dashboard/analytics) tracking robot status, connectivity and battery metrics using Zustand state management and live telemetry.",
  tags: ["Zustand", "React", "Telemetry", "Data Viz"],
};
