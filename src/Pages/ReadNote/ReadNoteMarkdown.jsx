import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function ReadNoteMarkdown(props) {

    const { content } = props;

    return (
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
    )
}

