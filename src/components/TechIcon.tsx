import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Binary,
  Layers,
  Globe,
  Wrench,
  TerminalSquare,
  Layout,
  Bug,
  GraduationCap,
  Rocket,
  FileCode,
  FolderGit2,
  Server
} from 'lucide-react';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiMysql,
  SiGithub,
  SiC,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'SiCplusplus':
      return <SiCplusplus className={className} />;
    case 'SiPython':
      return <SiPython className={className} />;
    case 'FaJava':
      return <FaJava className={className} />;
    case 'SiC':
      return <SiC className={className} />;
    case 'SiJavascript':
      return <SiJavascript className={className} />;
    case 'SiMysql':
      return <SiMysql className={className} />;
    case 'SiReact':
      return <SiReact className={className} />;
    case 'SiTailwindcss':
      return <SiTailwindcss className={className} />;
    case 'SiHtml5':
      return <SiHtml5 className={className} />;
    case 'SiGithub':
      return <SiGithub className={className} />;
    case 'Binary':
      return <Binary className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'TerminalSquare':
      return <TerminalSquare className={className} />;
    case 'Layout':
      return <Layout className={className} />;
    case 'Bug':
      return <Bug className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Rocket':
      return <Rocket className={className} />;
    case 'FolderGit2':
      return <FolderGit2 className={className} />;
    case 'Server':
      return <Server className={className} />;
    default:
      return <FileCode className={className} />;
  }
};
