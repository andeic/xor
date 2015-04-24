(function(window) {
	'use strict';

	// Pirvate library creation
	var xor = (function() {
		// Bit flags
		var _bits    = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648];
		var _maxSize = _bits.length;

		// XOR constructor
		function xor () {

		}

		/**
		 * Performs a bitwise AND.
		 * 
		 * @param Number a The first set of bits to perform AND on.
		 * @param Number b The second set of bits to perform AND on.
		 *
		 * @return Number 1 in each position where both matching bits are 1.
		 */
		xor.prototype.and = function(a, b) {
			return a & b;
		};

		/**
		 * Performs a bitwise OR.
		 * 
		 * @param Number a The first set of bits to perform OR on.
		 * @param Number b The second set of bits to perform OR on.
		 *
		 * @return Number 1 in each position where either or both bits are 1.
		 */
		xor.prototype.or = function(a, b) {
			return a | b;
		};

		/**
		 * Performs a bitwise XOR.
		 * 
		 * @param Number a The first set of bits to perform XOR on.
		 * @param Number b The second set of bits to perform XOR on.
		 *
		 * @return Number 1 in each position where either but not both bits are 1.
		 */
		xor.prototype.xor = function(a, b) {
			return a ^ b;
		};

		/**
		 * Performs a bitwise NOT.
		 * 
		 * @param Number a The set of bits to perform NOT on.
		 *
		 * @return Number Inverts all bits.
		 */
		xor.prototype.not = function(a) {
			return ~a;
		};

		/**
		 * Shifts the bits right by specific amount. 
		 * 
		 * @param Number bits   The bits to perform the shift on.
		 * @param Number amount The amount of bits to shift right.
		 *
		 * @return Number The bit representation post shift (shifted 1s past 0 are discarded).
		 */
		xor.prototype.rightShift = function(bits, amount) {
			return bits >> amount;
		};

		/**
		 * Shifts the bits right by specific amount replacing missing left sided bits with 0s.
		 * 
		 * @param Number bits   The bits to perform the shift on.
		 * @param Number amount The amount of bits to shift right.
		 *
		 * @return Number The bit representation post shift (shifted 1s past 0 are discarded and missing bits on left are replaced with 0s).
		 */
		xor.prototype.rightShiftFill = function(bits, amount) {
			return bits >>> amount;
		};

		/**
		 * Shifts the bits left by specific amount adding 0s to beggining or bits. 
		 * 
		 * @param Number bits   The bits to perform the shift on.
		 * @param Number amount The amount of bits to shift left.
		 *
		 * @return Number The bit representation post shift.
		 */
		xor.prototype.leftShift = function(bits, amount) {
			return bits << amount;
		};

		/**
		 * Creates a bitmask from a supplied string or boolean values.
		 * 
		 * @param Mixed[] Either a string of binary representation, or a limited amount of boolean values.
		 *
		 * @return Number The number representation of the specified bits.
		 */
		xor.prototype.createMask = function() {
			var length = arguments.length < _maxSize ? arguments.length : _maxSize;
			var mask   = 0;

			if (length === 1 && typeof arguments[0] == 'string') {
				return parseInt(arguments[0], 2);
			}
			else {
				for (var i = 0; i < length; i++) {
					mask |= arguments[i] << i;
				}
			}
			
			return mask;
		};

		/**
		 * Tests whether or not a set of bit flags match a bitmask.
		 * 
		 * @param Number flags The bit flags to test.
		 * @param Number mask  The bitmask to test against for equality.
		 *
		 * @return Boolean Whether the flags and mask are identical.
		 */
		xor.prototype.testMask = function(flags, mask) {
            return (flags & mask) === mask;
        }
		
		return xor;
	})();

	// Make the XOR library publicly accessible
	window.XOR = new xor();

})(window);