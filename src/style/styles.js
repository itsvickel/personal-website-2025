import { color } from "./color";

export const styles = { 
  
}

export const glowStyle = (color) => {
  return {
      cursor: `pointer`,
      padding: `10px 20px`,
      textTransform: `uppercase`,
      borderRadius: `8px`,
      fontSize: `17px`,
      fontWeight: `500`,
      textShadow: `none`,
      background: `transparent`,
      boxShadow: `transparent`,
      border: `1px solid ${color.white}`,
      transition: `0.5s ease`,
      userSelect: `none`
    }
}

export const hoverGlowStyle = (mainColor, secondaryColor) => { 
    return {
      background: mainColor,
      border: `1px solid ${color.white}`,
      textShadow: `0 0 5px ${secondaryColor}, 0 0 10px ${secondaryColor}, 0 0 20px ${secondaryColor}`,
      boxShadow: `0 0 5px ${mainColor}, 0 0 20px ${mainColor}, 0 0 50px ${mainColor}, 0 0 100px ${mainColor}`,
      fontSize: `18px`,
    }
}