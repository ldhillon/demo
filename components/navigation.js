import Link from 'next/link';

const Navigation = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <Link href="/" className="navbar-brand">
            <i className="fa-stack">
                <i className="fa fa-circle-o-notch fa-stack-2x"></i>
                <i className="fa fa-building-o fa-stack-1x"></i>
            </i>
            <span className="ml-2">
                Contoso Spaces
            </span>
        </Link>

        <div id="navigation">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link href="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/locations" className="nav-link">
                        Locations
                    </Link>
                </li>

            </ul>
        </div>
    </nav>;

export default Navigation;