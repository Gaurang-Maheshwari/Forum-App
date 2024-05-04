import { createStackNavigator } from '@react-navigation/stack';
import Index from './index'; // Corrected import
import Home from './Home'; // Corrected import
import About from './About'; // Corrected import
import Discussion from './Discussion'; // Corrected import
import Profile from './Profile'; // Corrected import
import Signup from './Signup'; // Corrected import
import Solution from './Solution'; // Corrected import
import Login from './Login'; // Corrected import
import Qna from './Qna'; // Corrected import
import Blog from './Blog'; // Corrected import
import Tools from './Tools'; // Corrected import

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Index" component={Index}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Discussion" component={Discussion} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Solution" component={Solution} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Qna" component={Qna} />
            <Stack.Screen name="Blog" component={Blog} />
            <Stack.Screen name="Tools" component={Tools} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
