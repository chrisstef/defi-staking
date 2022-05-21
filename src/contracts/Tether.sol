// The contract has functionalities like: - Approval, -Transfering, -Transfering from 3rd parties.
pragma solidity ^0.5.0;

contract Tether {
    string public name = "Mock Tether Token"; // Our token name.
    string public symbol = "mUSDT"; // Our token symbol.
    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens.
    uint8 public decimals = 18;

    // Event which is fired when a tansfer is being made.
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // Event which is fired during the process to approve the transaction.
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() public {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(balanceOf[msg.sender] >= _value); // Require that the value is greater or equal for transfer.
        balanceOf[msg.sender] -= _value; // Transfer the amount and subtract the balance.
        balanceOf[_to] += _value; // Add the balance.
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        allowance[msg.sender][_spender] = _value; // The person who is currently connection to the contract is going to be equal to the value before we can approve.
        emit Approval(msg.sender, _spender, _value); // Fire the event to return true when the spender approves.
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_to] += _value; // Add the balance for transferFrom.
        balanceOf[_from] -= _value; // Subtract the balance for transferFrom.
        allowance[msg.sender][_from] -= _value;
        emit Transfer(_from, _to, _value); // Event fires when the transfer is being made.
        return true;
    }
}
