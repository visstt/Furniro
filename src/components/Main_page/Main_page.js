import Section_1 from './Section_1/Section_1';
import Section_2 from './Section_2/Section_2';
import Section_3 from  './Section_3/Section_3';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

export default function Main_Page (){
    return(
        <>
            <Header/>
            <Section_1/>
            <Section_2/>
            <Section_3/>
            <Footer/>
        </>
    )
}