
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetBalanceCostAmountOfInterOPResult" type="{http://www.w3.org/2001/XMLSchema}long"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getBalanceCostAmountOfInterOPResult"
})
@XmlRootElement(name = "GetBalanceCostAmountOfInterOPResponse")
public class GetBalanceCostAmountOfInterOPResponse {

    @XmlElement(name = "GetBalanceCostAmountOfInterOPResult")
    protected long getBalanceCostAmountOfInterOPResult;

    /**
     * getBalanceCostAmountOfInterOPResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public long getGetBalanceCostAmountOfInterOPResult() {
        return getBalanceCostAmountOfInterOPResult;
    }

    /**
     * getBalanceCostAmountOfInterOPResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setGetBalanceCostAmountOfInterOPResult(long value) {
        this.getBalanceCostAmountOfInterOPResult = value;
    }

}
