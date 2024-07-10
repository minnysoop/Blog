import Container from "./container";

type Props = {
    title: string,
    children: React.ReactNode
};

export function Section({ title, children }: Props) {
    return (
        <div className="mx-auto w-3/4 mb-8">
            <Container>
                <h2 className="mb-4 text-2xl font-bold tracking-tighter leading-tight">
                    {title}
                </h2>
                <div>
                    {children}
                </div>
            </Container>
        </div>
    );
}