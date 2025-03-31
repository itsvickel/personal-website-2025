import { color } from "./color";

export const constants = {

    defaultPageStyle : {
        display:'flex',
        flexDirection: 'column',
        color: 'black',
        maxHeight: '75vh',
        minWidth: '50vw',
        maxWidth: '50vw',
        padding: '2%',
        background: `${color.white}`,
        borderRadius: '20px',
        boxShadow: `10px 5px 5px ${color.lightGrey}`,
        overflowY: 'auto',
        
        '@media screen and (max-width: 800px)': {
            display: 'fixed',
            margin: '4% 0',
            minWidth: '90vw',
            maxHeight: '80vh',
            padding: '4%',
            height: 'inherit',
          }
    },

    responsiveness: {
        mobile : {
            maxWidth: "480px", 
        },    
        Phablet : {
            maxWidth: "720px", 
        },
        tablet : {
            maxWidth: "768px", 
        },
    }

}