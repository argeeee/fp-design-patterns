// State interface
type TrafficLightState = {
  switchLight(trafficLight: TrafficLight): void;
}

// Concrete states
const createRedState = (): TrafficLightState => ({
  switchLight: (trafficLight: TrafficLight) => {
    console.log("Turning from red to green...");
    trafficLight.changeState(createGreenState());
  }
});

const createYellowState = (): TrafficLightState => ({
  switchLight: (trafficLight: TrafficLight) => {
    console.log("Turning from yellow to red...");
    trafficLight.changeState(createRedState());
  }
});

const createGreenState = (): TrafficLightState => ({
  switchLight: (trafficLight: TrafficLight) => {
    console.log("Turning from green to yellow...");
    trafficLight.changeState(createYellowState());
  }
});

// Context
type TrafficLight = {
  changeState(state: TrafficLightState): void;
  switchLight(): void;
};

const createTrafficLight = (): TrafficLight => {
  let state: TrafficLightState = createRedState();

  return {
		changeState: (newState: TrafficLightState): void => {
			state = newState;
		},
		switchLight() {
			state.switchLight(this);
		},
	}
};

export default () => {
  if (false) {
    // Example usage
    const trafficLight = createTrafficLight();

    trafficLight.switchLight(); // Output: Turning from red to green...
    trafficLight.switchLight(); // Output: Turning from green to yellow...
    trafficLight.switchLight(); // Output: Turning from yellow to red...
  }
};
