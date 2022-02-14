import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="m-0 p-0 ">
          <nav className="justify-content-around ">
            <div className="d-flex flex-row-revers sbg-dark px-1 pb-5 pt-1">

                <ul className="px-4 py-2 navbar-nav flex-row text-white w-50">
                    <li className="nav-item1 "><a href="Movies" className="">Movies</a></li>
                    <li className="nav-item2 mx-auto"><a href="TV Show" className="">TV Show</a></li>
                    <li className="nav-item3 mx-auto"><a href="Music" className="">Music</a></li>
                    <li className="nav-item4 mx-auto"><a href="Documentary" className="">Documentary</a></li>
                    <li className="nav-item5 mx-auto"><a href="Games" className="">Games</a></li>
                    <li className="nav-item6 mx-auto"><a href="Tutorials" className="">Tutorials</a></li>
                </ul>


                <ul className="px-4 py-2 navbar-nav flex-row flex-wrap w-50 icon-class">
                    <li className="nav-item1 col-6"><a href="Movies" className="">Movies</a></li>
                    <li className="nav-item2 col-6"><a href="Movies" className="">TV Show</a></li>
                    <li className="nav-item3 col-6"><a href="Movies" className="">Music</a></li>
                    <li className="nav-item5 col-6"><a href="Movies" className="">Games</a></li>
                </ul>

            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
