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

## Summary

In testing different reinforcement learning methods for self-parking simulations, three key algorithms were evaluated: Double Deep Q-Network (DDQN), Deep Q-Network (DQN), and Proximal Policy Optimization (PPO). The parking environment, built using Pygame, incorporated assets such as cars, walls, and parking goals. Additionally, the environment enabled tracking of the car's position using rays along each edge, facilitating performance assessment of the models. By implementing these features, the effectiveness of each reinforcement learning method could be assessed based on their ability to navigate the car within the parking environment and successfully park it in designated spots. This comprehensive testing approach aimed to determine which algorithm exhibited the most robust and efficient self-parking behavior, providing valuable insights for further refinement and optimization of autonomous vehicle systems.

After careful consideration, I ultimately opted for Proximal Policy Optimization (PPO) as the reinforcement learning algorithm for my self-parking simulation project. I dedicated significant time to training the model, diligently adjusting hyperparameters to achieve optimal performance. These adjustments were crucial in tailoring the model to the specific characteristics of the problem, mitigating issues such as overfitting and underfitting, and ensuring computational efficiency. Furthermore, I made deliberate architectural design choices by fine-tuning the number of layers, neurons per layer, and activation functions. This holistic approach allowed me to strike a balance between exploration and exploitation while effectively addressing algorithm sensitivity, ultimately leading to the successful realization of my project goals.

## Built With

- Python
- Tensorflow
- Keras
- Numpy
- Pytorch
- Pygame
- Gym
