class FigureCalculator {
    constructor(mathBasic) {
      this._mathBasic = mathBasic;
    }
   
    calculateRectanglePerimeter(...args) { 
        if (args.length !== 2) {
            throw new Error('fungsi hanya menerima dua parameter');
        }

        const [length, width] = args;
 
        if (typeof length !== 'number' || typeof width !== 'number') {
          throw new Error('fungsi hanya menerima parameter number');
        }

        // formula: (2 * (length + width))
        return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    }
    calculateRectangleArea(...args) {
        if (args.length !== 2) {
            throw new Error('fungsi hanya menerima dua parameter');
        }

        const [length, width] = args;
 
        if (typeof length !== 'number' || typeof width !== 'number') {
          throw new Error('fungsi hanya menerima parameter number');
        }

        // formula: (length * width)
        return this._mathBasic.multiply(length, width);
    }
    calculateTrianglePerimeter(...args) { 
        if (args.length !== 3) {
            throw new Error('fungsi hanya menerima tiga parameter');
        }

        const [sideA, sideB, base] = args;
 
        if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
          throw new Error('fungsi hanya menerima parameter number');
        }
        // formula: (sideA + sideB) + base
        return this._mathBasic.add(sideA, this._mathBasic.add(sideB, base));
    }
    calculateTriangleArea(...args) { 
        if (args.length !== 2) {
            throw new Error('fungsi hanya menerima dua parameter');
        }

        const [base, height] = args;
 
        if (typeof height !== 'number' || typeof base !== 'number') {
          throw new Error('fungsi hanya menerima parameter number');
        }

        return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
    }
}

module.exports = FigureCalculator;