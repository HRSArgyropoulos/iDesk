import {
  HeadingVariant,
  SubtitleVariant,
  BodyVariant,
} from '../types/text';

export interface ITextProps {
  variant?: HeadingVariant | SubtitleVariant | BodyVariant;
  children: string;
  className?: string;
}
