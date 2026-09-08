import { BrowserRouter, Routes, Route } from "react-router-dom";



import './App.css';
import Navbar from './componant/navbar';
import Homepage from './homepage/homepage';
import Footer from './componant/footer';
import DanceGallery from './homepage/dancegallery';
import Homepage2 from './homepage/homepage2';

import TemplePage1 from './templepages/templePage1';
import TemplePage2 from './templepages/templepage2';
import TemplePage3 from './templepages/templepage3';
import TemplePage4 from './templepages/templePage4';


import StatuePage1 from './statuepages/statuepage1';
import StatuePage2 from './statuepages/statuepage2';
import StatuePage3 from './statuepages/statuepage3';
import StatuePage4 from './statuepages/statuepage4';


import FoodPage1 from './foodpage/foodpage1'
import FoodPage2 from './foodpage/foodpage2'
import FoodPage3 from './foodpage/foodpage3'
import FoodPage4 from './foodpage/foodpage4'
function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Homepage />
                            <DanceGallery />
                            <Homepage2 />
                            
                        </>
                    }
                />

                {/* Temple Pages */}
                <Route
                    path="/TemplePage1"
                    element={<TemplePage1 />}
                
                />

                <Route
                    path="/TemplePage2"
                    element={<TemplePage2 />}
                    
                />

                <Route
                    path="/TemplePage3"
                    element={<TemplePage3 />}
                />

                <Route
                    path="/TemplePage4"
                    element={<TemplePage4 />}
                />
                {/*Statue page1 */}
                <Route
                    path="/StatuePage1"
                    element={<StatuePage1 />}
                />


                    {/*Statue page2 */}
                    <Route
                        path="/StatuePage2"
                        element={<StatuePage2 />}
                    />

                    {/*Statue page3 */}
                    <Route
                        path="/StatuePage3"
                        element={<StatuePage3 />}
                    />

                    {/*Statue page4 */}
                    <Route
                        path="/StatuePage4"
                        element={<StatuePage4 />}
                    />

                    {/*Food page1 */}
                    <Route
                        path="/FoodPage1"
                        element={<FoodPage1 />}
                    />

                     {/*Food page2 */}
                    <Route
                        path="/FoodPage2"
                        element={<FoodPage2 />}
                    />

                        {/*Food page3 */}
                    <Route
                        path="/FoodPage3"
                        element={<FoodPage3 />}
                    />

                    {/*Food page4 */}
                    <Route
                        path="/FoodPage4"
                        element={<FoodPage4 />}
                    />

            </Routes>
                    <Footer/>
        </BrowserRouter>
    );
}

export default App;