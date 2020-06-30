'use strict';

const expect = require('chai').expect
  , util = require('./util')
  ;

describe('#util', () => {

  describe('getBooleanValue()', () => {
    
    it('should use default for undefined', () => {
      const value = undefined;

      expect(util.convertToBoolean(value, true)).to.be.true;
      expect(util.convertToBoolean(value, false)).to.be.false;
    });

    it('should use default for null', () => {
      const value = null;

      expect(util.convertToBoolean(value, true)).to.be.true;
      expect(util.convertToBoolean(value, false)).to.be.false;
    });

    it('should use default for "undefined"', () => {
      const value = "undefined";

      expect(util.convertToBoolean(value, true)).to.be.true;
      expect(util.convertToBoolean(value, false)).to.be.false;
    });

    it('should use default for "null"', () => {
      const value = "null";

      expect(util.convertToBoolean(value, true)).to.be.true;
      expect(util.convertToBoolean(value, false)).to.be.false;
    });


    describe('truth values', () => {

      function expectTrue(value) {
        expect(util.convertToBoolean(value, true)).to.be.true;
        expect(util.convertToBoolean(value, false)).to.be.true;
      }

      it('should parse true', () => {
        expectTrue(true);
      });

      it('should parse "true"', () => {
        expectTrue('true');
      });

      it('should parse "t"', () => {
        expectTrue('t');
      });

      it('should parse "T"', () => {
        expectTrue("T");
      });

      it('should parse "yes"', () => {
        expectTrue('yes');
      });

      it('should parse "y"', () => {
        expectTrue('y');
      });

      it('should parse "Y"', () => {
        expectTrue('Y');
      });

      it('should parse "1"', () => {
        expectTrue('1');
      });
    });


    describe('false values', () => {

      function expectFalse(value) {
        expect(util.convertToBoolean(value, true)).to.be.false;
        expect(util.convertToBoolean(value, false)).to.be.false;
      }

      it('should parse false', () => {
        expectFalse(false);
      });

      it('should parse "false"', () => {
        expectFalse('false');
      });

      it('should parse "f"', () => {
        expectFalse('f');
      });

      it('should parse "F"', () => {
        expectFalse("F");
      });

      it('should parse "no"', () => {
        expectFalse('no');
      });

      it('should parse "n"', () => {
        expectFalse('n');
      });

      it('should parse "N"', () => {
        expectFalse('N');
      });

      it('should parse "0"', () => {
        expectFalse('0');
      });
    });
  });


  describe('invalid/unparsable values', () => {

    it('should use default for an Object reference', () => {
      const value = {a: 'value'};

      expect(util.convertToBoolean(value, true)).to.be.true;
      expect(util.convertToBoolean(value, false)).to.be.false;
    });

    describe('should use a default for unparsable boolean string', () => {

      const stringValues = [
        'true but not',
        'false1',
        'true0',
        '100',
        '00',
      ];

      stringValues.forEach(value => {
        it(`testing value "${value}"`, () => {
          expect(util.convertToBoolean(value, true)).to.be.true;
          expect(util.convertToBoolean(value, false)).to.be.false;
        });
      });
    });
  });
});