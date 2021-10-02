const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');

describe('A RocketLauncher', () => {
 
    // dummy example
    it('should launch all rockets', () => {
      // Arrage
      const nasaRocket = new Rocket('Nasa');
      const spaceXRocket = new Rocket('SpaceX');
      // dummy
      const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);
   
      // Action
      rocketLauncher.launchAllRockets();
   
     // Assert
     expect(nasaRocket.engineStatus).toEqual('active');
     expect(spaceXRocket.engineStatus).toEqual('active');
     expect(rocketLauncher.rockets.length).toEqual(0);
    });
   
    it('should launch only one rocket by queue', () => {
      // Arrage
      const nasaRocket = new Rocket('Nasa');
      const spaceXRocket = new Rocket('SpaceX');
      // dummy
      const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);
   
      // Action
      rocketLauncher.launchRocketByQueue();
   
      // Assert
      expect(nasaRocket.engineStatus).toEqual('active');
      expect(spaceXRocket.engineStatus).toEqual('inactive');
      expect(rocketLauncher.rockets.length).toEqual(1);
    });
  });
  