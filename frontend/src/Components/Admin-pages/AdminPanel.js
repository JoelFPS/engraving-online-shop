import {Link} from 'react-router-dom';
function Admin()
{
    return (
        <>
        <Link to='./orders' ><h1>Pokaż zamówienia</h1></Link>
        <Link to='./modify' ><h1>Modyfikuj produkty</h1></Link>
        </>
    )
}

export default Admin;