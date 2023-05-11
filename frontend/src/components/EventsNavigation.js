import { NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './EventsNavigation.module.css';

function EventsNavigation() {

  const token = useRouteLoaderData('root'); // will get a loader function from id root inside our router, it will store token and return true/false if token exists

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Events
            </NavLink>
          </li>
          {token && 
            <li>
              <NavLink
                to="/events/new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New Event
              </NavLink>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
