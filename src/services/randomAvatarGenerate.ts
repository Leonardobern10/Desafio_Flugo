import avatar0 from '../assets/avatar_alt1.png';
import avatar1 from '../assets/avatar_alt2.png';
import avatar2 from '../assets/avatar_alt3.png';
import avatar3 from '../assets/avatar_alt4.png';

const avatars: Array<string> = [avatar0, avatar1, avatar2, avatar3];

const randomNumber = (): number => {
     return Math.floor(Math.random() * 4);
};

export default function randomAvatarGenerate(): string {
     return avatars[randomNumber()];
}
