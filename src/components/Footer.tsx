
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 md:py-16 bg-secondary/40">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-base font-medium">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Imprensa
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-base font-medium">Ajuda & Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Central de Segurança
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Diretrizes da Comunidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-base font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/ip" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Propriedade Intelectual
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-base font-medium">Conecte-se</h3>
            <p className="text-sm text-muted-foreground">
              Junte-se à nossa comunidade e fique por dentro dos últimos anúncios.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-foreground hover:text-primary transition-colors">
                Facebook
              </Link>
              <Link to="#" className="text-foreground hover:text-primary transition-colors">
                Twitter
              </Link>
              <Link to="#" className="text-foreground hover:text-primary transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TrocaFácil. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este é um projeto de demonstração criado apenas para fins educacionais. Não afiliado à plataforma OLX.
          </p>
        </div>
      </div>
    </footer>
  );
}
