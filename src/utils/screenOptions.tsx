import Icons from '../assets/icons';

export const homeOptions = [
  {
    title: 'Meus exames',
    icon: Icons.myExamsIcon,
    info: 'Nessa opção, você pode gerenciar todos os seus exames.',
    route: { name: 'Exam' },
  },
  {
    title: 'Meu registro',
    icon: Icons.myRecordIcon,
    info: 'Aqui você verá um resumo do seu registro pessoal.',
    route: { name: 'Profile', screen: 'MyRecord' },
  },
];

export interface Route {
  name: string;
  screen?: string;
}