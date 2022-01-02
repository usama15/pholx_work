import {Skeleton} from "@material-ui/lab"

export const SkeletonCard = () => {
    return (
        <div>
            <Skeleton variant="rect" width={210} height={118} />
            <Skeleton />
            <Skeleton width="60%" />
        </div>
    )
}