import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useRandomNote from '../../Hooks/useRandomNote';

export default function RandomNote(props) {

    const randomNote = useRandomNote();

    return randomNote();
}