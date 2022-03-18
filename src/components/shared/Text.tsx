import styled, { css } from 'styled-components';

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

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type SubtitleVariant = 'subtitle1' | 'subtitle2';
type BodyVariant = 'span' | 'p';

interface ITextProps {
  variant?: HeadingVariant | SubtitleVariant | BodyVariant;
  children: string;
}

const Text = ({ variant = 'p', children }: ITextProps) => {
  switch (variant) {
    case 'h1':
      return <TextH1>{children}</TextH1>;
    case 'h2':
      return <TextH2>{children}</TextH2>;
    case 'h3':
      return <TextH3>{children}</TextH3>;
    case 'h4':
      return <TextH4>{children}</TextH4>;
    case 'h5':
      return <TextH5>{children}</TextH5>;
    case 'h6':
      return <TextH6>{children}</TextH6>;
    case 'subtitle1':
      return <TextSubtitle1>{children}</TextSubtitle1>;
    case 'subtitle2':
      return <TextSubtitle2>{children}</TextSubtitle2>;
    default:
      return <TextBody as={variant}>{children}</TextBody>;
  }
};

export default Text;
