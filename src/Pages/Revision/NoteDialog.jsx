import * as React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useNote from '../../Hooks/useNote';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TagSection from '../ReadNoteList/TagSection';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function NoteDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

export default function NoteDialog(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const {title, content, tags} = useNote(302);
  
    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <NoteDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    { title } { content } {tags.map((tag) => {
                        return tag.name
                    })} 
                </NoteDialogTitle>

                <DialogContent dividers>

                <ReactMarkdown
                    children={content}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            const wrapLines = true;
                            const lineProps = {
                                style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
                            };
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                    wrapLines={wrapLines}
                                    lineProps={lineProps}
                                    {...props}
                                />

                            ) : (
                                <SyntaxHighlighter
                                    children={children}
                                    wrapLines={wrapLines}
                                    lineProps={lineProps}
                                    {...props}
                                />
                            )
                        }
                    }}
                />
                </DialogContent>

                <TagSection tags={tags} />

                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Save changes
                </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    )
}