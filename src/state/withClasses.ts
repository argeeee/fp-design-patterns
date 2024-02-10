// State interface
interface TrafficLightState {
  switchLight(): void;
}

// Concrete states
class RedState implements TrafficLightState {
  constructor(private trafficLight: TrafficLight) {}

  switchLight(): void {
    console.log("Turning from red to green...");
    this.trafficLight.changeState(new GreenState(this.trafficLight));
  }
}

class YellowState implements TrafficLightState {
  constructor(private trafficLight: TrafficLight) {}

  switchLight(): void {
    console.log("Turning from yellow to red...");
    this.trafficLight.changeState(new RedState(this.trafficLight));
  }
}

class GreenState implements TrafficLightState {
  constructor(private trafficLight: TrafficLight) {}

  switchLight(): void {
    console.log("Turning from green to yellow...");
    this.trafficLight.changeState(new YellowState(this.trafficLight));
  }
}

// Context
class TrafficLight {
  private state: TrafficLightState;

  constructor() {
    this.state = new RedState(this);
  }

  changeState(state: TrafficLightState): void {
    this.state = state;
  }

  switchLight(): void {
    this.state.switchLight();
  }
}

export default () => {
	if (false) {
		// Example usage
		const trafficLight = new TrafficLight();

		trafficLight.switchLight(); // Output: Turning from red to green...
		trafficLight.switchLight(); // Output: Turning from green to yellow...
		trafficLight.switchLight(); // Output: Turning from yellow to red...
	}
}
