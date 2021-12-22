import { useContext } from 'react';
import { AuthContext } from '../provider/authProvider';

export default () => useContext(AuthContext);