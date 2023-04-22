export function getObserverCallback(updateBreadcrumbs, intersectionObserver) {
    const divs = [];
    let breadcrumbs = [];

    document.querySelectorAll('div').forEach(div => {
        divs.push(div.id)
    });

    console.log(breadcrumbs)
    divs.forEach((div, index)=> {
        let breadcrumb = document.getElementById(div);
        // если элемент наблюдаемый
        if(breadcrumb.isIntersecting) {
            if(!(breadcrumb.getAttribute('data-header') < breadcrumb[index - 1].getAttribute('data-header'))) {
                // делаем что-то
                breadcrumbs.push(breadcrumb.id);
            }
            // больше не отслеживается
            intersectionObserver.unobserve(breadcrumb.target);
        }
    });

    return updateBreadcrumbs(breadcrumbs);
}
