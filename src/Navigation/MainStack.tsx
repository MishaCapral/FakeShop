import Profile from '../components/Profile';
import navigationStrings from './navigationStrings';
import TabRoutes from './TabRoutes';

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TABS}
        component={TabRoutes}
        title={'Home'}
      />
      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{animation: 'slide_from_right'}}
      />
    </>
  );
}
