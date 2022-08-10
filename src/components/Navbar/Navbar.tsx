import {
	AppBar,
	IconButton,
	Toolbar,
	Drawer,
	Button,
	Avatar,
	useMediaQuery,
} from '@mui/material';
import {
	Menu,
	AccountCircle,
	Brightness4,
	Brightness7,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Navbar() {
	const isMobile = useMediaQuery('(max-width:600px)');
	const theme = useTheme();
	const isAuthenticated = true;
	return (
		<AppBar position='fixed'>
			<Toolbar
				className='h-20 flex justify-between flex-wrap sm:flex-nowrap
			 ml-0 sm:ml-60 '
			>
				{isMobile && (
					<IconButton
						color='inherit'
						edge='start'
						style={{ outline: 'none' }}
						onClick={() => {}}
						className='hidden sm:block'
					>
						<Menu />
					</IconButton>
				)}
				<IconButton color='inherit' sx={{ ml: 1 }} onClick={() => {}}>
					{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
				</IconButton>
				{!isMobile && 'search...'}
				<div>
					{!isAuthenticated ? (
						<Button color='inherit' onClick={() => {}}>
							Login &nbsp; <AccountCircle />
						</Button>
					) : (
						<Button
							color='inherit'
							component={Link}
							to='/profile/:id'
							onClick={() => {}}
							className=''
						>
							{!isMobile && <>My Movies &nbsp; </>}
							<Avatar
								style={{ width: 30, height: 30 }}
								alt='profile'
								src='https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1'
							/>
						</Button>
					)}
				</div>
				{isMobile && 'search...'}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
