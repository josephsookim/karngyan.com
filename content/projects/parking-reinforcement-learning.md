---
id: 8
title: Parking Reinforcement Learning
description: self-parking simulation using Proximal Policy Optimization (PPO)
tech: python
logo: /images/projects/parking.png
website: https://github.com/josephsookim/parking-reinforcement-learning
github: https://github.com/josephsookim/parking-reinforcement-learning
twitter: KimchiiJoe
---

## 1. Introduction and Problem Statement

Our goal is to train an autonomous car parking agent to make optimal decisions based on sensor inputs. While autonomous vehicles offer the luxury of convenience, safety should be the top priority. When driving, the environment can be complex and dynamic. Therefore, the agent will use sensor data for input, and the output will be a set of actions consisting of the following: steering control, throttle, and braking. While automated parking systems have previously demonstrated impressive capabilities, there are still ongoing research and development efforts to further improve their performance.

This project aims to explore the PPO, DQN, and DDQN algorithms in training an autonomous parking agent that can navigate a variety of parking scenarios including parallel parking, and to evaluate their respective performance in terms of accuracy, speed, and efficiency. The agent starts with random status and then gradually learns to solve the task by reacting to environment feedback. The environment gives the agent positive or negative rewards. Specifically, the agent will get positive rewards when getting closer to the parking spot, and will get a larger reward when it reaches the spot and stops there. The final reward for reaching the parking spot is dependent on how parallel the car stops compared to the actual parking position. The agent will get a negative reward when it either drives further away from the parking spot or if it crashes into any obstacles or cars.

## 2. Related Work

There have been many large tech companies and automotive brands that have deployed autonomous driving and automated parking systems in practical production, such as Tesla. However, few have attempted to build simulation scenarios from scratch to achieve an automated parking system and conduct analysis. In the past, attempts have been made to solve this problem by using convolution neural networks(CNN), different machine learning policies and intelligent image analysis systems. For instance, YOLO and CNN have been used in paper “Automatic Parking System Based on Improved Neural Network Algorithm and Intelligent Image Analysis”, while a genetic algorithm has been used in a GitHub open-source project (https://github.com/trekhleb/self-parking-car-evolution).

Based on our observation, we have found a limited number of open-source projects and research papers that focus on using reinforcement learning for automated parking. Therefore, we are employing several reinforcement learning methods for this task and evaluating the performance of them rather than developing new algorithms. Based on the traditional use of CNN in automated parking systems, we also aim to explore the integration of CNN and reinforcement learning methods for the application.

## 3. Data Sets

In our project, we do not have a static dataset. Instead, we gather data from the car's actions in each iteration. The dataset includes various information that is crucial for the automated parking task and they will be the inputs of our networks. Here is a description of the data we collect:

1. Sensor Readings: We collect readings from the car's 8 sensors, which provide information about the surrounding environment. Those sensors are evenly distributed around the car in a linear fashion. Each sensor is responsible for detecting the distance between the car and any obstacles or the target parking spot in its specific direction. Then the distance information is fed as inputs to the RL networks used for decision making.

2. Speed and Position: We record the car's current speed and position. This information helps in understanding the dynamics of the car during the parking process.

3. Parking Spot Information: At the beginning of each iteration, we randomly select one parking spot from eight available parking spaces. We capture the location and dimensions of the selected parking spot for each iteration. This allows the system to understand the specific characteristics of the parking space.

4. Relative Position to Target Parking Spot: Determining the relative position of the car to the target parking spot is crucial for making decisions and optimizing the parking process. This includes metrics such as the distance and angle between the car and the desired parking location. Based on it, we can adjust the award value in our reinforcement learning framework. For example, when the car gets closer to the target parking spot, we can increase the positive reward to reinforce successful behavior and encourage the car to continue moving towards the goal. Conversely, if the car moves away from the target or deviates from the desired trajectory, we can reduce the total reward to discourage undesirable behavior.

By collecting this data in each iteration, we create a dynamic dataset that reflects the changing environment and the car's actions as it navigates the parking scenario.

![](/images/projects/parking_demo.png)

## 4. Description of Technical Approach

In this section, we provide a detailed description of the techniques, algorithms, and software components that formed the core of our project. We outline the key architecture of our system, environment setup, data collection software, and the algorithms employed for analysis.

### 4.1 System Architecture

Our automatic parking system starts with setting up a simulation parking environment with PyGame and Gym library. We collect data from the simulation process according to the dataset description above, which will then undergo preprocessing, including recording and action mapping. The preprocessed data is fed into the core reinforcement learning algorithms, including PPO, DQN, and DDQN, to train and evaluate their performance. Finally, the performance of the algorithms is evaluated using appropriate metrics and quantitative comparison. The block diagram below illustrates the high-level architecture of our system:

```
       +-------------------------+
       |   Environment Setup     |
       +------------+------------+
                    |
                    v
          +-------------------+
          |   Data Collection |
          +---------+---------+
                    |
                    v
           +------------------+
           |   Preprocessing  |
           +---------+--------+
                    |
                    v
       +-------------+-------------+
       |      Core Algorithms      |
       |     (PPO, DQN, DDQN)      |
       +-------------+-------------+
                    |
                    v
           +------------------+
           |    Evaluation    |
           +--------+---------+
```

### 4.2 Environment Setup

In this project, we created a simulation environment using Pygame for training and evaluating RL agents in a parking scenario. The environment consists of a parking lot with walls and multiple parking spots, where the agent-controlled car aims to park without any collision. We mainly rely on Pygame to build the interactive game environment. The setup involved initializing Pygame, defining the game screen, configuring the action and observation spaces using Gym, creating objects such as the car, walls, and goals, and implementing methods for game logic, rendering, and resource cleanup. The environment provides a realistic simulation of parking, enabling RL agents to learn and improve their parking skills.

### 4.3 Data Collection and Preprocessing

The initial phase of our project involved collecting and preprocessing the raw data of the car's action to ensure its suitability for analysis. We used the following techniques and software:

1.  Data Collection: In each iteration, data is collected during the automated parking process. As described above, the collected data includes readings from the car's sensors, its speed and position, the location of the selected parking spot, and the relative position to the target parking spot.

2.  Action Mapping: To facilitate decision-making, we utilized a **hashmap** to map the car's actions to numerical values. For instance, we assigned the value 4 to represent a left turn and 6 to represent a right turn. This mapping enabled us to process the car's actions in a standardized format.

3.  Feature Preprocessing: The collected data underwent preprocessing steps to ensure its suitability for further analysis. This involved normalizing sensor readings, converting categorical variables into numerical representations, and addressing any missing or erroneous data points. Preprocessing was necessary to enhance the quality and consistency of the dataset.

### 4.4 Core Reinforcement Learning Algorithms

The core of our project involved comparing and evaluating different algorithms for a specific task. We describe the algorithms used and their versions below:

1.  Proximal Policy Optimization (PPO): PPO is a reinforcement learning algorithm that aims to optimize policy functions by iteratively updating them using a surrogate objective. We used the PPO implementation provided by the OpenAI Gym and Stable Baselines3 libraries. The specific version of PPO employed was the stable-baselines3 1.1.0.

2.  Deep Q-Network (DQN): DQN is a reinforcement learning algorithm that combines Q-learning with deep neural networks. We implemented DQN using the Keras and TensorFlow libraries. The specific version of Keras and TensorFlow used was 2.6.0 and 2.7.0, respectively.

3.  Double Deep Q-Network (DDQN): DDQN is an extension of DQN that addresses the overestimation bias issue by using two separate networks for action selection and target estimation. We implemented DDQN using the Keras and TensorFlow libraries, with the same versions as DQN.

## 5. Software

### 5.1 Written Code

| Code                      | Purpose / Functionality                                                             |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Main                      | Runs the PPO algorithm without plotting a graph                                     |
| TestMain                  | Runs the PPO algorithm while plotting a graph. Uses multithreading to achieve this  |
| MainDDQN                  | Runs the DDQN algorithm while plotting a graph. Uses multithreading to achieve this |
| MainDQN                   | Runs the DQN algorithm while plotting a graph. Uses multithreading to achieve this  |
| ParkingEnv (Class/Module) | Virtual parking environment made using PyGame                                       |
| Car (Class/Module)        | Logic and Physics of Car Movement and Scoring                                       |
| Goals (Class/Module)      | Parking Spot Goals                                                                  |
| Line (Class/Module)       | Stores the two points on a line                                                     |
| Point (Class/Module)      | Stores the x and y coordinate                                                       |
| Ray (Class/Module)        | Logic of Ray Projection                                                             |
| Walls (Class/Module)      | For use on the border of the parking lot along with the parking spots               |
| Helpers (Utils)           | Helper functions that would be reused in multiple parts of the program              |
| DDQN                      | Implements the DDQN algorithm                                                       |
| main_DDQN                 | The entry point for the execution of DDQN automatic parking system                  |
| DQN                       | Implements the DQN algorithm                                                        |
| main_DQN                  | The entry point for the execution of DQN automatic parking system                   |
| PPO                       | Implements the PPO algorithm                                                        |

### 5.2 Outsourced Code

| Code       | Purpose / Functionality                  | Reference                                  |
| ---------- | ---------------------------------------- | ------------------------------------------ |
| PyGame     | To construct the virtual environment     | https://www.pygame.org/docs/               |
| Pytorch    | To implement the PPO algorithm           | https://pytorch.org/docs/stable/index.html |
| Keras      | To implement the DDQN and DQN algorithms | https://faroit.com/keras-docs/1.2.0/       |
| OpenAI Gym | To initialize a state action space       | https://github.com/openai/gym              |
| Tensorflow | To implement the DDQN and DQN algorithms | https://www.tensorflow.org/api_docs        |
| Matplotlib | To create the graphs                     | https://matplotlib.org/                    |

## 6. Experiments and Evaluation

In this section, we describe the experiments conducted to evaluate the performance of different algorithms (PPO, DDQN, DQN) in the parking environment. We provide details on the experimental setup, evaluation metrics, and the obtained results.

### 6.1 Experimental Setup

#### 6.1.1 Parking Environment

The experiments were conducted using the Parking Environment, which is a simulated environment designed to simulate parking scenarios. The environment consists of a parking lot with walls and goals, and an agent (a car) that learns to navigate and park within the environment. The agent's goal is to reach the parking goals while avoiding collisions with walls.

#### 6.1.2 Algorithms

Three algorithms were evaluated in the experiments: Proximal Policy Optimization (PPO), Double Deep Q-Network (DDQN), and Deep Q-Network (DQN). Each algorithm was implemented separately and trained using the same Parking Environment。

The PPO algorithm was implemented using Pytorch, while the DDQN and DQN algorithms were implemented using the Keras and TensorFlow libraries.

#### 6.1.3 Hyperparameters

The hyperparameters used for each algorithm were set as follows:

1.  PPO:

```
    Learning rate: 0.001
    Discount factor (gamma): 0.99
    Number of epochs: 10
    Batch size: 64
```

2.  DDQN:

```
    Learning rate: 0.0001
    Discount factor (gamma): 0.99
    Batch size: 64
    Replay memory size: 25,000
    Epsilon-greedy exploration: initial=1.0, decay=0.999995, minimum=0.10
```

3.  DQN:

```
    Learning rate: 0.0001
    Discount factor (gamma): 0.99
    Batch size: 64
    Replay memory size: 25,000
    Epsilon-greedy exploration: initial=1.0, decay=0.999995, minimum=0.10
```

### 6.2 Evaluation Metrics and Methods

#### 6.2.1 Average Reward

The primary metric used to evaluate the algorithms' performance is the average reward obtained during the training episodes. The average reward provides an indication of how well the agent is able to navigate and park within the environment. Higher average rewards indicate better performance.

To calculate the average reward, we compute the sum of rewards obtained in each episode and divide it by the total number of episodes.

#### 6.2.2 Hit Rate

Another metric used for evaluation is the hit rate, which measures the percentage of successful parking actions achieved by the agent. A successful parking action is defined as reaching the parking goal without colliding with any walls.

The hit rate is calculated by dividing the number of successful parking actions by the total number of episodes and multiplying by 100. A higher hit rate indicates a better ability to successfully park the car.

### 6.3 Results

The results indicate that although all three algorithms show improvement in hit counts over iterations, the progress is relatively slow. The average rewards remain negative, indicating that the models struggle to achieve positive rewards consistently. Furthermore, the hit rates do not reach satisfactory levels, suggesting that the models have difficulty successfully completing the parking task.

It is evident that the performance of the algorithms needs further improvement to achieve better hit rates and more stable average rewards. Possible avenues for improvement could include adjusting the algorithm parameters, exploring different neural network architectures, or incorporating additional techniques such as reward shaping or curriculum learning. Further analysis and experimentation are required to enhance the algorithms' performance and achieve more desirable results.

Overall, the evaluation of the algorithms reveals that while they show potential, additional refinement and optimization are necessary to achieve the desired outcomes in terms of hit rates and average rewards.

## 7. Discussion and Conclusion

Throughout this project, several insights were gained regarding the algorithms and the problem at hand. Here are some key observations:

- **Algorithm Performance**

The algorithms used in this project, namely PPO, DQN, and DDQN, demonstrated potential in learning and improving over time. They showed an increasing trend in hit counts, indicating progress in the parking task. However, the rate of improvement was relatively slow, and the hit rates did not reach satisfactory levels. The average rewards also did not converge to positive values, suggesting that the models struggled to consistently achieve positive outcomes.

- **Expectations vs. Results**

The project's results aligned with the expectations to some extent. It was anticipated that the algorithms would show improvement over iterations, and this was confirmed by the increasing hit counts. However, the magnitude of improvement and the convergence of average rewards fell short of expectations. The limited progress and inability to achieve desirable hit rates were surprising, highlighting the challenges of the parking problem.

- **Limitations of Current Approaches**

The current approaches to the parking problem have several limitations. First, the learning process requires a significant number of iterations to achieve reasonable performance, indicating the need for extensive training. Second, the algorithms' performance heavily depends on the chosen parameters, and finding the optimal parameter configuration can be challenging. Third, the problem's complexity and the environment dynamics make it difficult to generalize the learned policies to different scenarios, such as varied parking spaces or obstacles.

- **Future Directions**

If given the opportunity to direct a research lab addressing this problem, several ideas and directions could be explored over the next year or two:

**a. Enhanced Reward Design:** Investigating novel reward shaping techniques that provide more informative and task-specific rewards could improve the learning process. Designing reward functions that encourage desirable behavior, such as smooth driving or efficient parking, could guide the algorithms towards more effective policies.

**b. Curriculum Learning:** Employing a curriculum learning approach, where the complexity of the parking task is gradually increased, can help the models learn progressively. Starting with simpler scenarios and gradually introducing more challenging parking situations could facilitate better learning and generalization.

**c. Advanced Exploration Strategies:** Exploring different exploration strategies, such as using intrinsic motivation or curiosity-based methods, can encourage the models to explore the environment more effectively. These strategies can promote better coverage of the state-action space and facilitate the discovery of optimal policies.

**d. Transfer Learning and Generalization:** Investigating techniques for transfer learning and generalization could allow the models to leverage knowledge learned from one parking scenario to another. This could involve training on a diverse set of parking environments or employing techniques like domain adaptation to improve the algorithms' adaptability to new situations.

**e. Hybrid Approaches:** Combining the strengths of different algorithms, such as integrating elements of PPO and DQN, or exploring hybrid reinforcement learning and imitation learning approaches, could potentially lead to more robust and effective parking policies.

**f. Real-world Simulations:** Emphasizing the use of realistic simulators that closely resemble real-world parking scenarios can facilitate the transfer of learned policies to actual autonomous parking systems. Simulators with accurate physics and realistic sensor models can enhance the models' capabilities to handle various real-world challenges.

**g. Multi-agent Systems:** Extending the problem formulation to consider multiple parking agents, such as coordinating the parking of multiple vehicles in a limited space, can open up new research directions. Exploring cooperative or competitive multi-agent reinforcement learning frameworks may offer innovative solutions to complex parking scenarios.

In conclusion, the project provided valuable insights into the algorithms used for the parking problem. While the results demonstrated progress, the limitations and challenges of the current approaches were evident. To make significant progress on this problem, future research should focus on refining reward design, exploring curriculum learning and advanced exploration strategies, improving transfer learning and generalization capabilities, investigating hybrid approaches, incorporating realistic simulations, and considering multi-agent systems. By addressing these aspects, it is possible to advance the development of autonomous parking systems and overcome the current limitations in achieving efficient and robust parking behaviors.
