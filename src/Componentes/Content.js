import React from 'react';
import ContentStyled from "./ContentStyled";
import "@hbsis.uikit/react/dist/uikit.css";
import { Card, CardHeader, CardContent, CardFooter, Button } from '@hbsis.uikit/react';
import DataTableUsage from "../DataTable/DataTable";
// import DataTable from '../DataTable/DataTable'
// import Data from '../DataTable/Data'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ContentStyled>
                <div className="style-content">
                    <Card className="panel-card">
                        <CardHeader title="Horários" />
                        <CardContent>
                            <DataTableUsage />
                        </CardContent>
                        <CardFooter>
                            <Button type="secondary" width="120px">
                                Cancelar
            </Button>
                            <Button type="primary" width="120px">
                                Salvar
            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </ContentStyled>
        );
    }
}

export default Content;