import photo from './assets/FreepikBackgroundShadow.jpg';
export default function HomePage(){


    //todo lisää toiminnallisuuksia
    return (
        <p className="HomePage" style={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'center',}}>    
            <img src={photo} height={700} width={700} style={{border: '10px solid gray',}}/>
            <text   style={{backgroundColor:"white", fontSize:40, fontFamily:"fantasy"}}>DEV TEAM 1</text>
        </p>
    );
}

