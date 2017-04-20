
/**
 * Usage:
 * import design, { Colors } from '../styles';
 */

export const Colors = {
  SOFTWHITE: '#D6D1CD',
  SOFTGRAY: '#65666E',
  GRAY: '#373841',
  PURPLE: '#323247',
  SOFTPURPLE: '#454561',
  /**
   * Get one of this colors with an alpha value
   * @param  {[string]} color
   * @param  {[number]} alpha [(0.0 - 1.0)]
   */

  withAlpha(color, alpha) {
    const hex = this[color];
    if (!hex) {
      throw new Error(`Color ${color} does not exist`);
    }

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },
};

export default Colors;
