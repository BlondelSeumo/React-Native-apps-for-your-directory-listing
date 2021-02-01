// https://stackoverflow.com/questions/35255645/how-to-set-default-font-family-in-react-native
import React from 'react';
import {
	Text,
	useColorScheme,
} from 'react-native';
import {AllHtmlEntities} from 'html-entities';
import getThemedColors from '../../helpers/Theme';
import {regularFontFamily} from '../../constants/Colors';
export default props => {
	const tval = (typeof props.children === 'string' || props.children instanceof String) ? props.children : ''+props.children;
	const entities = new AllHtmlEntities();
	const colors = getThemedColors(useColorScheme())
	return <Text {...props} style={[{fontFamily: regularFontFamily,color: colors.regularText}, props.style]}>{entities.decode(tval)}</Text>
}
