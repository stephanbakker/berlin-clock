import {BerlinClockService}  from '../berlin-clock-service';

describe('Berlin Clock', () => {

  describe('Berlin clock service', () => {
    const clock = new BerlinClockService();

    it('should berlin props for 14:29:23', () => {
      const testDate = new Date(2016, 3, 15, 14, 29, 23); 
      const expected = {
        seconds: 1,
        hours1: 2,
        hours2: 4,
        minutes1: 5,
        minutes2: 4
      };
      clock.tick(testDate).should.be.deep.equal(expected)
    })

    it('should return berlin props 22:57:02', () => {
      const testDate = new Date(2016, 3, 15, 22, 57, 2); 
      const expected = {
        seconds: 0,
        hours1: 4,
        hours2: 2,
        minutes1: 11,
        minutes2: 2
      };
      clock.tick(testDate).should.be.deep.equal(expected)
    })

    it('should return berlin props 02:00:07', () => {
      const testDate = new Date(2016, 3, 15, 2, 0, 7); 
      const expected = {
        seconds: 1,
        hours1: 0,
        hours2: 2,
        minutes1: 0,
        minutes2: 0
      };
      clock.tick(testDate).should.be.deep.equal(expected)
    })

  });

});
