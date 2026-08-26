/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */


function cloneGraph(node: _Node | null): _Node | null {
	const clones = new Map<_Node, _Node>();

    return dfs(node, clones);;
};

function dfs(node: _Node | null, clones: Map<_Node, _Node>): _Node | null {
    if (!node) return node;
    if (clones.has(node)) return clones.get(node)!;

    const clone = new _Node(node.val);
    clones.set(node, clone);

    for (const neighbor of node.neighbors) {
        clone.neighbors.push(dfs(neighbor, clones));
    }

    return clone;
}
