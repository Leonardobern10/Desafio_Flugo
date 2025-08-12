import avatar0 from '@images/avatar_alt1.png';
import avatar1 from '@images/avatar_alt2.png';
import avatar2 from '@images/avatar_alt3.png';
import avatar3 from '@images/avatar_alt4.png';

const avatars: Array<string> = [avatar0, avatar1, avatar2, avatar3];

/**
 * Gera um número inteiro aleatório entre 0 e 3 (inclusive).
 *
 * @returns {number} Número aleatório entre 0 e 3.
 */
const randomNumber = (): number => {
     return Math.floor(Math.random() * 4);
};

/**
 * Retorna um caminho de avatar aleatório dentre os disponíveis.
 *
 * Utiliza a função randomNumber para escolher um índice
 * e retorna o caminho da imagem correspondente no array avatars.
 *
 * @returns {string} Caminho para o arquivo de imagem do avatar aleatório.
 *
 *
 * */
export default function randomAvatarGenerate(): string {
     let index: number = randomNumber();
     return avatars[index];
}
