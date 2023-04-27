
import { useNavigate } from 'react-router-dom';

import useRandomId from '../../Hooks/useRandomId';

import { NOTE_URL } from '../../Constants/endpoints';

import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function RandomNote(props) {

    const navigate = useNavigate();
    const randomId = useRandomId();
    
    return (
        <List>
            <ListItem key="Random" >
                <ListItemButton onClick={() => {
                    randomId().then(randomId => {
                        navigate(`${NOTE_URL}/${randomId}`);
                    })
                }}>
                    <ListItemIcon>
                        <AnalyticsIcon />
                    </ListItemIcon>

                    <ListItemText primary="Random Page" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}