/**
 * Navbar — derived from the unified taxonomy module.
 *
 * Authoring lives in `taxonomy/data.ts`. This file is a thin adapter so
 * VuePress can keep importing `./navbar` as before.
 */
import { buildNavbar } from './taxonomy/adapters/navbar';

export default buildNavbar();
