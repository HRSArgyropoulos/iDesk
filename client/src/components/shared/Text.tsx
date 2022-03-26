import styled, { css } from 'styled-components';
import { ITextProps } from '../../interfaces/text';

// HEADINGS
// general style for headings
const textHeadings = css`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  color: ${({ theme }) => theme.text.primary};
`;

const TextH1 = styled.h1`
  ${textHeadings}
  font-size: 54px;
`;

const TextH2 = styled.h2`
  ${textHeadings}
  font-size: 36px;
`;

const TextH3 = styled.h3`
  ${textHeadings}
  font-size: 24px;
`;

const TextH4 = styled.h4`
  ${textHeadings}
  font-size: 16px;
`;

const TextH5 = styled.h5`
  ${textHeadings}
  font-size: 14px;
`;

const TextH6 = styled.h6`
  ${textHeadings}
  font-size: 12px;
`;

// SUBTITLES
const TextSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.subtitles};
  color: ${({ theme }) => theme.text.primary};
`;

// extend base subtitle styling
const TextSubtitle1 = styled(TextSubtitle)`
  font-size: 12px;
`;

const TextSubtitle2 = styled(TextSubtitle)`
  font-size: 10px;
`;

// BODY
// same component - different usage with 'as'
const TextBody = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
`;

// pass className for styled-compenents to

const Text = (props: ITextProps) => {
  const { variant = 'p', children, ...rest } = props;
  switch (variant) {
    case 'h1':
      return <TextH1 {...rest}>{children}</TextH1>;
    case 'h2':
      return <TextH2 {...rest}>{children}</TextH2>;
    case 'h3':
      return <TextH3 {...rest}>{children}</TextH3>;
    case 'h4':
      return <TextH4 {...rest}>{children}</TextH4>;
    case 'h5':
      return <TextH5 {...rest}>{children}</TextH5>;
    case 'h6':
      return <TextH6 {...rest}>{children}</TextH6>;
    case 'subtitle1':
      return <TextSubtitle1 {...rest}>{children}</TextSubtitle1>;
    case 'subtitle2':
      return <TextSubtitle2 {...rest}>{children}</TextSubtitle2>;
    default:
      return (
        <TextBody {...rest} as={variant}>
          {children}
        </TextBody>
      );
  }
};

export default Text;
