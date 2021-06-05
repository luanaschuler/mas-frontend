import {GoFile, GoNote, GoGraph} from 'react-icons/go';
import {Container} from './styles';

export function Summary() {

    return(
        <Container>
            <div className="">
                <header>
                    <p>Unidades Curriculares</p>
                    <GoFile size={40} />
                </header>
                <strong>25</strong>
            </div>

            <div className="">
                <header>
                    <p>Atividades</p>
                    <GoNote size={40} />
                </header>
                <strong>80</strong>
            </div>

            <div className="highlight-background">
            <header>
                    <p>Média Geral</p>
                    <GoGraph size={40} />
                </header>
                <strong>9.17</strong>
            </div>
            
        </Container>
    )

}