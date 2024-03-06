import React from 'react';
import "../../Styles/AboutUs.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";

function AboutUs()
{
    return (
        <div className='App'>
			<div className="content">
				<div className="productSection">
					<h1 id="business">O nas</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius efficitur tristique. Praesent a hendrerit ex. Integer et arcu vel orci varius feugiat sed eget leo. Etiam placerat tempus sem, eu tincidunt metus mollis non. In feugiat risus nunc, vel faucibus ex aliquam convallis. Etiam sodales pharetra eros, ac efficitur libero molestie ut. Praesent ac libero rutrum, fringilla tortor quis, ornare ante. Sed faucibus nisl ut gravida consectetur. Aenean nec aliquet odio, sed facilisis tellus. Phasellus dignissim, purus sit amet posuere varius, mauris enim efficitur ex, non ultricies nisi risus a turpis. Donec mollis lorem dolor, suscipit suscipit arcu fermentum eu.</p>
                </div> <br></br>
                <div className="productSection">
					<h1 id="technology">Nasze możliwości</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius efficitur tristique. Praesent a hendrerit ex. Integer et arcu vel orci varius feugiat sed eget leo. Etiam placerat tempus sem, eu tincidunt metus mollis non. In feugiat risus nunc, vel faucibus ex aliquam convallis. Etiam sodales pharetra eros, ac efficitur libero molestie ut. Praesent ac libero rutrum, fringilla tortor quis, ornare ante. Sed faucibus nisl ut gravida consectetur. Aenean nec aliquet odio, sed facilisis tellus. Phasellus dignissim, purus sit amet posuere varius, mauris enim efficitur ex, non ultricies nisi risus a turpis. Donec mollis lorem dolor, suscipit suscipit arcu fermentum eu.</p>
                    <div className="gallery">
                        <img src="/about-us/grawer.jpg" alt="grawer"></img>
                        <img src="/about-us/wiazka.jpg" alt="wiązka lasera"></img>
                    </div>
                </div><br></br>
                <div className="productSection">
					<h1 id="equipment">Nasz sprzęt</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius efficitur tristique. Praesent a hendrerit ex. Integer et arcu vel orci varius feugiat sed eget leo. Etiam placerat tempus sem, eu tincidunt metus mollis non. In feugiat risus nunc, vel faucibus ex aliquam convallis. Etiam sodales pharetra eros, ac efficitur libero molestie ut. Praesent ac libero rutrum, fringilla tortor quis, ornare ante. Sed faucibus nisl ut gravida consectetur. Aenean nec aliquet odio, sed facilisis tellus. Phasellus dignissim, purus sit amet posuere varius, mauris enim efficitur ex, non ultricies nisi risus a turpis. Donec mollis lorem dolor, suscipit suscipit arcu fermentum eu.</p>
                    <div className="gallery">
                        <img src="/about-us/maszyna1.jpg" alt="maszyna1"></img>
                        <img src="/about-us/maszyna2.jpg" alt="maszyna2"></img>
                    </div>
                </div><br></br>
                <div className="productSection">
					<h1>Kontakt i dane firmy</h1>
                    <table className="dane">
                        <tr>
                            <td><div className="kon"><p><h1>Telefon:</h1><br></br><FaPhoneAlt /> 731 884 757</p></div></td>
                            <td><div className="kon"><p><h1>Obszar działania:</h1><br></br><FaMapMarkerAlt /> Nowa Sól</p></div></td>
                            <td><div className="kon"><p><h1>E-mail:</h1><br></br><FaEnvelope /> grawerowy@gmail.com</p></div></td>
                        </tr>
                    </table>
                </div>
			</div>
		</div>
    )
}

export default AboutUs;