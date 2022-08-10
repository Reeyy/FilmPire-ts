import { makeStyles } from '@mui/material';

export default makeStyles((theme: any): any => ({
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoint.up('sm')]: {
			display: 'none',
		},
	},
}));
